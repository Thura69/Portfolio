import ProjectShowCase from '@/components/ProjectShowCase';
import { project } from '@/language/project';
import { projectDetail } from '@/types/projectDetail.types';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


function OrderId() {
  const router = useRouter();
  const { orderId } = router.query;
 const [projectDetail, setProjectDetail] = useState<any>({
    id: 1,
    project_name: "Real Time Fuel Management System",
    status: false,
    year: 2023,
    live_at: 'https://detfsmmm.com',
    role: "FullStack Development",
    about: '',
    tools: '',
    pictures: [],
    next_project_title: '',
    next_project_description: '',
    next_project_pictures: []
  });

  
  useEffect(() => {
    const number = Number(orderId);
    const gg = project[number];
    setProjectDetail(gg);
  }, [orderId]);

  return (
    <div>
      <ProjectShowCase projectDetail={projectDetail}  />
    </div>
  )
}

export default OrderId