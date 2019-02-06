DELETE FROM students
WHERE student_id = $1;

select student_id, students.name, students.cohort, campus_data.campus, program from students
join campus_data on (students.campus = campus_data.campus_id)
order by student_id desc;