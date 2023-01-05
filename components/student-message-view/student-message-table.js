import studentMess from '../../styles/studentMess.module.scss';
import Link from 'next/link';

const MessageDataArr = [
    {id:1, date: "xx/xx/xxx at xx:xx", name:"Student name", subject:"Review Tournament Games", message:"<Unread> Arma virumque canō, Trōiae quī prīmus ab ōrīs"},
    {id:2, date: "xx/xx/xxx at xx:xx", name:"Student name", subject:"Review Games/Problems", message:"<Read, Replied> Arma virumque canō, Trōiae quī prīmus ab ōrīs"},
    {id:3, date: "xx/xx/xxx at xx:xx", name:"Student name", subject:"Review OGS League", message:"<Read, No Reply> Arma virumque canō, Trōiae quī prīmus ab ōrīs"},
    {id:4,date: "xx/xx/xxx at xx:xx", name:"Student name", subject:"Play w/ 35pt komi", message:"<Unread> Arma virumque canō, Trōiae quī prīmus ab ōrīs"}
]

export default function StudentMessageTable () {
    return (
        <div className={studentMess.messageTableContainer}>
            <table className={studentMess.messageTable}>
            <tbody>
                <tr>
                    <th></th>
                    <th>Message Date</th>
                    <th>From</th>
                    <th>Subject</th>
                    <th>Message Preview</th>
                </tr>
                {MessageDataArr.map((val) => {
                    return (
                        <tr key={val.id}>
                            <td>
                                <button>
                                    <Link href="/message-details">Show Message</Link>
                                </button>
                            </td>
                            <td>{val.date}</td>
                            <td>{val.name}</td>
                            <td>{val.subject}</td>
                            <td>{val.message}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}