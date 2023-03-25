export const TaskSidebar = ({ rating }) => {
  return (
    <aside>
      <div className="points-block">Your points</div>

      {rating ? (
        <div className="ratings-block"></div>
      ) : null}
    </aside>
  );
}
