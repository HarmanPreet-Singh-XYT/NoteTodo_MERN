import Categories_Cont from '@/Helpers/Categories'
import Notes_Cont from '@/Helpers/Notes'
import './globals.css'
import './calendar.css'
import './Todo.css'
import { Inter } from 'next/font/google'
import Selection_Cont from '@/Helpers/Selection'
import ShowCard_Cont from '@/Helpers/ShowCard'
import FormData_cont from '@/Helpers/CardCreationData'
import NoteCreator from '@/Helpers/CreateCard'
import SelectedCardData_cont from '@/Helpers/SelectedCardData'
import Calendar_cont from '@/Helpers/Calendar-Cont'
import Useref_Update_cont from '@/Helpers/Useref_Update'
import DateDay_Calculation_cont from '@/Helpers/Date-Day-Calculation'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Notes Todo App',
  description: 'Get organized with Notes-Todo Combined App. Manage tasks and notes in one place for seamless productivity.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>
      </head>
      <body className={inter.className}><DateDay_Calculation_cont><Useref_Update_cont><Calendar_cont><SelectedCardData_cont><NoteCreator><FormData_cont><ShowCard_Cont><Selection_Cont><Categories_Cont><Notes_Cont>{children}</Notes_Cont></Categories_Cont></Selection_Cont></ShowCard_Cont></FormData_cont></NoteCreator></SelectedCardData_cont></Calendar_cont></Useref_Update_cont></DateDay_Calculation_cont></body>
    </html>
  )
}
