/**
 * interface를 이용해서 함수를 정의한다.
 */
interface Student2{
    name: string; // 이름
    age: number; // 나이
    grades: number[]; // grades를 숫자 배열로 수정
    subject: { // 과목
        korean: number;
        english: number;
        math: number;
    };
}

/**
 * @param name 
 * @param grades 
 * @param subject 
 * @returns 
 */
function createStudent2(name: string, age:number, grades: number[], subject: {korean: number, english: number, math: number}): Student2 {
    // 결과 값 출력을 위한 셋팅
    return {
            name: name,
            age: age,
            grades: grades,
            subject: subject
        };
}

/**
 * @author 평균 성적 계산하기
 * @param student 
 * @returns average
*/
function calculateAverage2(student: Student2): number {
    // 합계를 담을 변수를 선언한다.
    let sum = 0;
    
    // 해당 점수의 값을 더해서 Student2 interface의 grades 배열에 저장한다.
    for (let i =0; i < student.grades.length; i++) {
        sum += student.grades[i]; 
    }
    
    // Student2의 grades에 저장된 값을 가져와서 평균 점수를 저장된 배열의 길이만큼 나누어 반환한다.
    const average = sum / student.grades.length;
    
    // 평균값을 반환한다.
    return average;
}

/**
 * @author 점수를 통해 성적 계산하기
 * @param average 
 * @returns achievement
*/
function assignGrade2(average: number): string { 
    // 빈 값으로 저장 공간을 할당한다.
    let achievement = ''; 
    
    // switch 문을 통해서 해당 값에 해당하는 문장을 반환한다.
    switch (true) {
        case (average >= 90): achievement = 'A'; break;
        case (average >= 80): achievement = 'B'; break;
        case (average >= 70): achievement = 'C'; break;
        case (average >= 60): achievement = 'D'; break;
        default: 'F'; // 'F'는 default
    }
    
    // switch문을 통해서 해당 값을 반환한다.
    return achievement; 
}


/**
 * 
 * @param student 
 */
function printResult2(student: Student2): void {
    // 평균 성적 계산
    const averageScore: number = calculateAverage2(student);

    // 성적 등급 할당
    const grade: string = assignGrade2(averageScore);

    // 결과 출력
    console.log(`이름: ${student.name}`);
    console.log(`나이: ${student.age}`);
    console.log(`국어 성적: ${student.subject.korean}`);
    console.log(`영어 성적: ${student.subject.english}`);
    console.log(`수학 성적: ${student.subject.math}`);
    // toFixed() 함수를 이용해서 소수점 2자리까지 출력한다.
    console.log(`전체 평균 점수: ${averageScore.toFixed(2)}`);
    console.log(`등급: ${grade}`);

}

/**
 * main function
 */
function main2(): void {
    // 학생 생성
    const result: Student2 = createStudent2('John', 34, [80, 75, 90], { korean: 85, english: 88, math: 92 });
    printResult2(result);
}

main2();