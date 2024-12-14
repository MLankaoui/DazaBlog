import Header from "../header/Header.jsx";
import Swal from 'sweetalert2';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "2b5b321b-9793-4cc7-a358-4b58e004d427");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            await Swal.fire({
                title: "Good job!",
                text: "Email sent successfully!",
                icon: "success"
            });
        } else {
            await Swal.fire({
                title: "Oops!",
                text: "Error",
                icon: "error"
            });
        }
    };

    return (
        <>
            <Header />
            <section>
                <div className="container py-5">
                    <h2 className="text-center mb-4 display-4 text-success fw-bold">Contact Us</h2>
                    <p className="text-center text-muted mb-5 fs-5">
                        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                    </p>
                    <form onSubmit={onSubmit} className="row g-4">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input
                                name="name"
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Joe"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="name@flowbite.com"
                                required
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                className="form-control"
                                placeholder="Let us know how we can help you"
                                required
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="6"
                                className="form-control"
                                placeholder="Leave a comment..."
                            ></textarea>
                        </div>
                        <div className="col-12 text-center">
                            <button
                                type="submit"
                                className="btn btn-success btn-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
