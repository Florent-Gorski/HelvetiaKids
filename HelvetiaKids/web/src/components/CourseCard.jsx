import React from 'react';

function CourseCard({ course }) {
return (
<div>
<h2>{course.title}</h2>
<p>{course.description}</p>
</div>
);
}

export default CourseCard;