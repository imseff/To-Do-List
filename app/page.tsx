'use client'
import { useState } from "react";

interface Task {
  newTitle: string;
  newContent: string;
}

export default function Home() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [task, setTask] = useState<Task[]>([])

  const buttons = [
    {
      label: "Edit", 
      color: "bg-blue-700 border-blue-900"
    },
    {
      label: "Delete",
      color: "bg-red-700 border-red-900"
    }
  ]


  function handleAddTask(){
    const newTask: Task = {
      newTitle: title,
      newContent: content 
    }
    setTask(prev => [...prev, newTask]);
    setTitle('')
    setContent('')
  }

  function handleDeleteTask(indexToDelete: number){
    setTask(prevTask => prevTask.filter((_, index) => index !== indexToDelete))
  }

  return (
    <div className="flex justify-center w-screen h-screen text-black">
      <div className="w-full h-full max-w-[1440] flex flex-col justify-center items-center bg-rose-50">  
        <div className="w-full max-w-[500] border-3 rounded-xl border-black p-3 h-[720]">
          <div className="flex flex-col mb-7">
            <div className="font-bold text-lg mb-2">Create New Item</div>
            <div className="flex flex-col gap-2 items-start">
              <input type="text" placeholder="Title" value={title} className="w-full border-2 rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-rose-200 focus:border-rose-400" onChange={(e) => setTitle(e.target.value)}/>
              <input type="text" placeholder="Content" value={content} className="w-full border-2 rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-rose-200 focus:border-rose-400"onChange={(e) => setContent(e.target.value)} />
              <button type="submit" className="bg-green-700 text-white border-green-900 border-2 px-3 py-1 rounded-xl mt-2" onClick={handleAddTask}>Add Item</button>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="font-bold text-lg mb-2">
              Item List
            </div>
            {task.map((item,index) => (
              <div key={index} className="flex justify-between p-2 border-2 rounded-md">
                <div className="flex flex-col">
                  <span className="font-bold">{item.newTitle}</span>
                  <span className="text-sm">{item.newContent}</span>
                </div>
                <div className="flex items-center gap-1">
                  {buttons.map((btn, btnIndex)=> (
                    <button key={btnIndex} className={`${btn.color} text-white border-2 px-3 py-1 rounded-xl`}>
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
