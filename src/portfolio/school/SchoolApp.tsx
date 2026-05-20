import { useEffect } from 'react';
import { SchoolSidebar } from './components/Sidebar';
import { SchoolTopbar } from './components/Topbar';
import { OverviewCards } from './components/sections/OverviewCards';
import { PerformanceChart } from './components/sections/PerformanceChart';
import { Schedule } from './components/sections/Schedule';
import { Subjects } from './components/sections/Subjects';
import { Assignments } from './components/sections/Assignments';
import { ActivityFeed } from './components/sections/Activity';
import './styles/school.css';

export default function SchoolApp() {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.getAttribute('data-theme');
    root.setAttribute('data-theme', 'light');
    return () => {
      if (previous) root.setAttribute('data-theme', previous);
    };
  }, []);

  return (
    <div className="school-root min-h-screen">
      <div className="flex">
        <SchoolSidebar />

        <div className="flex min-h-screen flex-1 flex-col">
          <SchoolTopbar />

          <main className="flex-1 px-5 py-7 md:px-8 md:py-10">
            <div className="school-container">
              <div className="mb-7 flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
                    overview · term 2 · week 7
                  </p>
                  <h1 className="font-display mt-1 text-3xl font-bold tracking-tight md:text-4xl">
                    Today is shaping up well.
                  </h1>
                </div>
                <div className="flex gap-2">
                  <button className="school-btn-ghost">Download report</button>
                  <button className="school-btn-primary">Open timetable</button>
                </div>
              </div>

              <OverviewCards />

              <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-5">
                  <PerformanceChart />
                  <Subjects />
                  <Assignments />
                </div>

                <div className="space-y-5">
                  <Schedule />
                  <ActivityFeed />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
