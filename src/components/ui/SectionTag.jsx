// export default function SectionTag({children , light = false}){
//     return (
//          <div className={`inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.12em] uppercase mb-5
//       ${light ? 'text-accent-g' : 'text-accent'}`}
//     >
//       <span className={`w-5 h-px ${light ? 'bg-accent-g' : 'bg-accent'}`} />
//       {children}
//     </div>
//     )
// }

export default function SectionTag({ children, light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-[0.72rem] font-bold
                  tracking-[0.12em] uppercase mb-5
                  ${light ? 'text-accent-g' : 'text-accent'}`}
    >
      <span
        className={`w-5 h-px block ${light ? 'bg-accent-g' : 'bg-accent'}`}
      />
      {children}
    </div>
  )
}