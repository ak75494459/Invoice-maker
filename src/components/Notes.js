import React from 'react'

export default function Notes({ setNotes, notes }) {
  return (
    <>
      <section className="mb-5 mt-5 m-2">
        <textarea
          name="notes"
          id="notes"
          rows={5}
          className="bg-gray-200 border-2 border-black text-black w-full p-2"
          placeholder="Notes...."
          onChange={(e) => { setNotes(e.target.value) }}
          value={notes}
        />
      </section>
    </>
  )
}
