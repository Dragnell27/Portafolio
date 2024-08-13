export const Footer = () => {
    return (
        <footer className="footer">
            <Footer_items/>
        </footer>
    )
}

export const Footer_items = () => {
    const items = [
        {
            pr : 'jaduvase27@gmail.com',
            icon : 'email.svg'
        },
        {
            pr : 'github.com/Dragnell27',
            icon : 'github.svg'
        },
        {
            pr : 'linkedin.com/in/jvalencias',
            icon : 'linkedin.svg'
        },
        {
            pr : 'Cali, Valle del Cauca',
            icon : 'location.svg'
        },
    ]

    return (
        items.map((item,i)=>(
            <div key={i} className="footer-cont">
                <img
                    src={`icon/${item.icon}`}
                />
                <p className="ft">{item.pr}</p>
            </div>
        ))
    );
}