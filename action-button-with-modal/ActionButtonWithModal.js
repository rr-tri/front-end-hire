function ActionButtonWithModal() {
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleDelete = () => {
        console.log('Deleted!');
        closeModal();
    };
    return (
        <>
            <button onClick={openModal}>Fake Delete</button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <div>Are you sure?</div>
                <span>
                    <button onClick={closeModal}>Cancel</button>
                    <button onClick={handleDelete}>Delete</button>
                </span>
            </Modal>
        </>
    )
}