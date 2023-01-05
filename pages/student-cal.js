import NavBar from '../components/nav-bar'
import Head from 'next/head'
import StudCalandarView from '../components/student-calandar-view/student-calandar-view'

export default function StudentCal() {
    return (
    <div>
        <Head>
            <title>Student Calandar </title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <div className="studContainer">
            <StudCalandarView />
        </div>  
    </div>
    )
}