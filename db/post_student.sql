INSERT INTO students (name, cohort, campus) 
VALUES ($1,$2,$3);

-- return whole list after posting, good user experience

SELECT * FROM students
order by student_id desc;