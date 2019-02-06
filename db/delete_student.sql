DELETE FROM students
WHERE student_id = $1;
SELECT * FROM students
order by student_id desc;