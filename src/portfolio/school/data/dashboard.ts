export interface SubjectCard {
  id: string;
  name: string;
  teacher: string;
  grade: string;
  progress: number;
  nextLesson: string;
  accent: 'sky' | 'cyan' | 'indigo' | 'amber' | 'emerald' | 'rose';
}

export const subjects: SubjectCard[] = [
  { id: 's-01', name: 'Further Mathematics', teacher: 'Mr. Akinwale', grade: 'SS 2 · Set A', progress: 78, nextLesson: 'Tue · 10:30 · Room 4', accent: 'sky' },
  { id: 's-02', name: 'English Language', teacher: 'Mrs. Adeleke', grade: 'SS 2 · Set A', progress: 92, nextLesson: 'Tue · 12:00 · Room 11', accent: 'rose' },
  { id: 's-03', name: 'Physics', teacher: 'Dr. Eze', grade: 'SS 2 · Set A', progress: 64, nextLesson: 'Wed · 09:00 · Lab 2', accent: 'cyan' },
  { id: 's-04', name: 'Government', teacher: 'Mr. Bello', grade: 'SS 2 · Set A', progress: 88, nextLesson: 'Wed · 11:00 · Room 7', accent: 'indigo' },
  { id: 's-05', name: 'Chemistry', teacher: 'Dr. Okonkwo', grade: 'SS 2 · Set A', progress: 71, nextLesson: 'Thu · 09:30 · Lab 1', accent: 'emerald' },
  { id: 's-06', name: 'Yoruba Studies', teacher: 'Mrs. Adetunji', grade: 'SS 2 · Set A', progress: 84, nextLesson: 'Thu · 13:00 · Room 9', accent: 'amber' },
];

export interface ScheduleSlot {
  time: string;
  subject: string;
  room: string;
  teacher: string;
  status: 'now' | 'next' | 'later' | 'done';
}

export const todaySchedule: ScheduleSlot[] = [
  { time: '08:00', subject: 'Morning assembly', room: 'Main hall', teacher: 'Mrs. Daré', status: 'done' },
  { time: '08:45', subject: 'Further Maths', room: 'Room 4', teacher: 'Mr. Akinwale', status: 'done' },
  { time: '10:30', subject: 'English Language', room: 'Room 11', teacher: 'Mrs. Adeleke', status: 'now' },
  { time: '12:00', subject: 'Lunch', room: 'Refectory', teacher: '—', status: 'next' },
  { time: '13:00', subject: 'Physics · Lab', room: 'Lab 2', teacher: 'Dr. Eze', status: 'later' },
  { time: '14:30', subject: 'Yoruba Studies', room: 'Room 9', teacher: 'Mrs. Adetunji', status: 'later' },
  { time: '15:30', subject: 'Debate club', room: 'Library', teacher: 'Mr. Bello', status: 'later' },
];

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  due: string;
  status: 'submitted' | 'in-progress' | 'pending';
  weight: string;
}

export const assignments: Assignment[] = [
  { id: 'a-01', title: 'Calculus problem set · Chapter 7', subject: 'Further Maths', due: 'Today · 18:00', status: 'in-progress', weight: '12%' },
  { id: 'a-02', title: 'Essay · Things Fall Apart', subject: 'English', due: 'Tomorrow · 09:00', status: 'pending', weight: '20%' },
  { id: 'a-03', title: 'Lab report · Newton’s rings', subject: 'Physics', due: 'Thu · 23:59', status: 'in-progress', weight: '15%' },
  { id: 'a-04', title: 'Constitutional analysis essay', subject: 'Government', due: 'Fri · 23:59', status: 'submitted', weight: '18%' },
];

export interface ActivityItem {
  id: string;
  who: string;
  what: string;
  when: string;
  type: 'grade' | 'submission' | 'message' | 'event';
}

export const activity: ActivityItem[] = [
  { id: 'ac-01', who: 'Mr. Akinwale', what: 'returned graded calculus quiz · 92%', when: '12 min', type: 'grade' },
  { id: 'ac-02', who: 'You', what: 'submitted Government essay', when: '34 min', type: 'submission' },
  { id: 'ac-03', who: 'Mrs. Adeleke', what: 'sent: "Bring printed essay to class tomorrow"', when: '1 hr', type: 'message' },
  { id: 'ac-04', who: 'School office', what: 'mid-term parents’ evening scheduled · Fri 17:00', when: '2 hr', type: 'event' },
  { id: 'ac-05', who: 'Dr. Eze', what: 'uploaded Physics revision pack · 14 pages', when: '4 hr', type: 'submission' },
];

export interface AttendanceDay {
  day: string;
  pct: number;
  note?: 'sick' | 'present' | 'late';
}

export const attendance: AttendanceDay[] = [
  { day: 'Mon', pct: 100, note: 'present' },
  { day: 'Tue', pct: 100, note: 'present' },
  { day: 'Wed', pct: 88, note: 'late' },
  { day: 'Thu', pct: 100, note: 'present' },
  { day: 'Fri', pct: 100, note: 'present' },
  { day: 'Mon', pct: 0, note: 'sick' },
  { day: 'Tue', pct: 100, note: 'present' },
  { day: 'Wed', pct: 100, note: 'present' },
  { day: 'Thu', pct: 100, note: 'present' },
  { day: 'Fri', pct: 92, note: 'late' },
  { day: 'Mon', pct: 100, note: 'present' },
  { day: 'Tue', pct: 100, note: 'present' },
];

export const performanceChart = [
  { term: 'Term 1', score: 72 },
  { term: 'Mid 1', score: 78 },
  { term: 'Term 2', score: 81 },
  { term: 'Mid 2', score: 84 },
  { term: 'Term 3', score: 87 },
  { term: 'Now', score: 89 },
];

export const student = {
  name: 'Tomi Akinwumi',
  grade: 'SS 2 · Set A',
  number: 'AC 8842',
  avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2.4&w=200&h=200&q=80',
  cumulative: 4.61,
  rank: 6,
  cohort: 84,
};
