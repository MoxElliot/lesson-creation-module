import NavBar from '../components/nav-bar';
import Head from 'next/head';
import studentLess from '../styles/studentLess.module.scss';
import studentMess from '../styles/studentMess.module.scss';
import StudentLessonView from '../components/student-lesson-view/student-lesson-view';
import StudentMessageView from '../components/student-message-view/student-message-view';

export default function StudentDash() {
    return (
    <div>
        <Head>
            <title>Student Dashboard</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <div className={studentLess.dashContainer}>
            <StudentLessonView />
        </div>
        <div className={studentMess.dashContainer}>
            <StudentMessageView />
        </div>
    </div>
    )
}