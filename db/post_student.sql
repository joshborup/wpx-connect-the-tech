INSERT INTO students (name, cohort, campus) 
VALUES ($1,$2,$3);

-- return whole list after posting, good user experience

select student_id, students.name, students.cohort, campus_data.campus, program from students
join campus_data on (students.campus = campus_data.campus_id)
order by student_id desc;