import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import supabase from '../supabaseClient';

function CoursesScreen() {
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
<View>
<Text>Cours disponibles</Text>
{courses.map((course) => (
<Text key={course.id}>{course.title}: {course.description}</Text>
))}
</View>
);
}

export default CoursesScreen;