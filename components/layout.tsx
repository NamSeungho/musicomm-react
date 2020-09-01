import Header from "./header";

export default function Layout ({ children }) {
    return (
        <div className="application">
            <Header/>
            <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY" />
            <div className='layout'>{children}</div>
        </div>
    );
}
