import NavBar from '../components/nav-bar';
import InstCalandarView from '../components/instructor-calandar-view/instructor-calandar-view';
import Head from 'next/head';


export default function InstructorCal() {
    
    return (
    <div>
        <Head>
            <title>Instructor Calandar</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <div className="instContainer">
            <InstCalandarView />
        </div>
    </div>
    )
}