/**
 * SBLOS Progress Storage
 * -----------------------------------
 * Stores learner progress locally.
 *
 * Later, this storage layer can be replaced
 * with Supabase without changing the rest
 * of the mastery system.
 */

const STORAGE_KEY = "sblos-progress";

function storageAvailable() {
  return (
    typeof window !== "undefined" &&
    typeof window.localStorage !== "undefined"
  );
}

export function loadProgress() {
  if (!storageAvailable()) {
    return {};
  }

  try {
    const savedProgress =
      window.localStorage.getItem(STORAGE_KEY);

    if (!savedProgress) {
      return {};
    }

    const parsedProgress = JSON.parse(savedProgress);

    return (
      parsedProgress !== null &&
      typeof parsedProgress === "object" &&
      !Array.isArray(parsedProgress)
    )
      ? parsedProgress
      : {};
  } catch (error) {
    console.error("Unable to load learner progress.", error);
    return {};
  }
}

export function saveProgress(progress) {
  if (!storageAvailable()) {
    return false;
  }

  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(progress)
    );

    return true;
  } catch (error) {
    console.error("Unable to save learner progress.", error);
    return false;
  }
}

export function clearProgress() {
  if (!storageAvailable()) {
    return false;
  }

  try {
    window.localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error("Unable to clear learner progress.", error);
    return false;
  }
}