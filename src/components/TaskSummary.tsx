type TaskSummaryProps = {
  total: number
  completed: number
  pending: number
}

function TaskSummary({ total, completed, pending }: TaskSummaryProps) {
  return (
    <section className="summary">
      <article className="summary__card">
        <p>Total</p>
        <strong>{total}</strong>
      </article>
      <article className="summary__card">
        <p>Completed</p>
        <strong>{completed}</strong>
      </article>
      <article className="summary__card">
        <p>Pending</p>
        <strong>{pending}</strong>
      </article>
    </section>
  )
}

export default TaskSummary
