const STORAGE_KEY = "linearAlgebraProgress";

function readProgress() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );

    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function writeProgress(progress) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(progress)
  );
}

function getModuleKey(moduleNumber) {
  return `module-${Number(moduleNumber)}`;
}

export function getCompletedLessons(moduleNumber) {
  const progress = readProgress();
  const moduleKey = getModuleKey(moduleNumber);
  const completedLessons = progress[moduleKey];

  return Array.isArray(completedLessons)
    ? [...new Set(completedLessons)]
    : [];
}

export function isLessonCompleted(moduleNumber, lessonSlug) {
  return getCompletedLessons(moduleNumber).includes(lessonSlug);
}

export function markLessonComplete(moduleNumber, lessonSlug) {
  const progress = readProgress();
  const moduleKey = getModuleKey(moduleNumber);

  const completedLessons = new Set(
    Array.isArray(progress[moduleKey])
      ? progress[moduleKey]
      : []
  );

  completedLessons.add(lessonSlug);

  progress[moduleKey] = [...completedLessons];
  writeProgress(progress);

  return progress[moduleKey];
}

export function markLessonIncomplete(moduleNumber, lessonSlug) {
  const progress = readProgress();
  const moduleKey = getModuleKey(moduleNumber);

  const completedLessons = Array.isArray(progress[moduleKey])
    ? progress[moduleKey]
    : [];

  progress[moduleKey] = completedLessons.filter(
    (slug) => slug !== lessonSlug
  );

  writeProgress(progress);

  return progress[moduleKey];
}

export function toggleLessonCompletion(
  moduleNumber,
  lessonSlug
) {
  if (isLessonCompleted(moduleNumber, lessonSlug)) {
    return {
      completed: false,
      lessons: markLessonIncomplete(
        moduleNumber,
        lessonSlug
      ),
    };
  }

  return {
    completed: true,
    lessons: markLessonComplete(
      moduleNumber,
      lessonSlug
    ),
  };
}

export function clearLinearAlgebraProgress() {
  localStorage.removeItem(STORAGE_KEY);
}