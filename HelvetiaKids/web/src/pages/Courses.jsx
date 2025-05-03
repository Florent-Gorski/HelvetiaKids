import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import CourseCard from '../components/CourseCard';

function Courses() {
const [courses, setCourses] = useState([]);

useEffect(() => {
const fetchCourses = async () => {
const { data, error } = await supabase.from('courses').select('*');
if (error) console.log('Error fetching courses:', error.message);
else setCourses(data);
};

fetchCourses();
}, []);

return (
<div>
<h1>Cours disponibles</h1>
<div>
{courses.map((course) => (
<CourseCard key={course.id} course={course} />
))}
</div>
</div>
);
}

export default Courses;