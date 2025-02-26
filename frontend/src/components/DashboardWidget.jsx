
function DashboardWidget({title, content, identifier}) {
    return (
        <div id="widget" className={identifier}>
            <h3>{title}</h3>
            {content}
        </div>
    );
}

export default DashboardWidget;