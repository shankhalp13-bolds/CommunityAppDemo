import React from 'react';
import { useForm } from '@inertiajs/react';

function PaymentForm() {
    const { data, setData, errors } = useForm({
        name: '',
        email: '',
        mobile: '',
        amount: '',
    });

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 mb-3">
                    <div className="card text-dark bg-light mb-3">
                        <div className="card-header text-center">
                            <h3 className="card-title" style={{ display: 'inline-block' }}>
                                Create New Payment - Webappfix
                            </h3>
                        </div>
                        <div className="card-body">
                            <form
                                action={route('store')}
                                method="POST"
                                target="_blank"
                            >
                                {/* <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').getAttribute('content')} /> */}
                                <div className="form-floating py-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Full Name"
                                    />
                                    <label htmlFor="name">Full Name</label>
                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                </div>
                                <div className="form-floating py-2">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="Email Address"
                                    />
                                    <label htmlFor="email">Email Address</label>
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                                <div className="form-floating py-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="mobile"
                                        id="mobile"
                                        value={data.mobile}
                                        onChange={(e) => setData('mobile', e.target.value)}
                                        placeholder="Mobile Number"
                                    />
                                    <label htmlFor="mobile">Mobile Number</label>
                                    {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
                                </div>
                                <div className="form-floating py-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="amount"
                                        id="amount"
                                        value={data.amount}
                                        onChange={(e) => setData('amount', e.target.value)}
                                        placeholder="Amount"
                                    />
                                    <label htmlFor="amount">Amount</label>
                                    {errors.amount && <div className="text-danger">{errors.amount}</div>}
                                </div>
                                <button className="w-100 btn btn-lg btn-success" type="submit">
                                    Place Order
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentForm;
