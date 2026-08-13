// Reuseable component for putting content inside a consisten-looking box

export default function Card({ title, children }) {
    return (
        <div className="card custom-card">
            <div className="card-body">
                {title && <h5 className="card-title">{title}</h5>}

                <div className="card-content">
                    {children}
                </div>
            </div>
        </div>
    );
}
