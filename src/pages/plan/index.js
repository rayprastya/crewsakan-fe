import React from 'react';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';

export default function Plan() {
  return (
    <main>
      <Sidebar/>
      <Topbar/>
      <div className="content">
      </div>
    </main>
  );
}
