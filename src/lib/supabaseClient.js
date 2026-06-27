import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('SUPABASE URL EXISTS:', Boolean(supabaseUrl));
console.log('SUPABASE KEY EXISTS:', Boolean(supabaseAnonKey));

const mockSupabase = {
  from() {
    return {
      select() {
        return this;
      },
      eq() {
        return this;
      },
      order() {
        return Promise.resolve({ data: [], error: null });
      },
      single() {
        return Promise.resolve({ data: null, error: null });
      },
      insert() {
        return Promise.resolve({
          data: null,
          error: { message: 'Supabase is not connected yet.' }
        });
      }
    };
  },
  auth: {
    getSession() {
      return Promise.resolve({ data: { session: null }, error: null });
    },
    onAuthStateChange() {
      return {
        data: {
          subscription: {
            unsubscribe() {}
          }
        }
      };
    },
    signUp() {
      return Promise.resolve({
        data: null,
        error: { message: 'Supabase is not connected yet.' }
      });
    },
    signInWithPassword() {
      return Promise.resolve({
        data: null,
        error: { message: 'Supabase is not connected yet.' }
      });
    },
    signOut() {
      return Promise.resolve({ error: null });
    }
  }
};

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : mockSupabase;