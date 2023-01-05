import Head from 'next/head';
import InstructorLessonView from '../components/instructor-lesson-view/instructor-lesson-view';
export default function InstructorDash() {
    return (
    <div>
        <Head>
            <title>Instructor Dashboard</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="dashContainer container">
            <InstructorLessonView />
        </div>
    </div>
    )
}