

function App() {
    return (
        <div>
            <ActionButtonWithModal />
            <SuperSlowComponent />
        </div>
    );
}


const createRoot = ReactDOM.createRoot
const root = createRoot(document.getElementById("app"));
root.render(<App />);