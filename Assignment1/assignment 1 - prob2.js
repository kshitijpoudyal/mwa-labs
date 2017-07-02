/**
 * Created by kcp on 6/26/17.
 */
function sort() {
    let library = [
        {prof: 'Asaad Saad', course: 'WAP', courseId: 'CS452'},
        {prof: 'Rakesh Shrestha', course: 'WAA', courseId: 'CS545'},
        {prof: 'Steve Nolle', course: 'SWE', courseId: 'CS425'},
    ];

    let course = library.map(library => library.course);
    let sorted = library.sort(function(a, b){
        var course1=a.course.toLowerCase(), course2=b.course.toLowerCase()
        if (course1 < course2)
            return -1;
        if (course1 > course2)
            return 1;
        return 0;
    })

    console.log(sorted);

}

sort();