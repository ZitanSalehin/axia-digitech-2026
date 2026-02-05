import {
	AlertCircle,
	CheckCircle,
	Facebook,
	Globe,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
	Send,
	Sparkles,
} from 'lucide-react';
import { useState } from 'react';

export default function ModernContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
	});

	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
	const [focusedField, setFocusedField] = useState('');

	const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	const validatePhone = phone => /^(?:\+88|88)?01[3-9]\d{8}$/.test(phone);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));

		// Real-time validation
		if (name === 'email' && value) {
			setErrors(prev => ({
				...prev,
				email: validateEmail(value) ? '' : 'Please enter a valid email address',
			}));
		}
		if (name === 'phone' && value) {
			setErrors(prev => ({
				...prev,
				phone: validatePhone(value)
					? ''
					: 'Please enter a valid Bangladeshi phone number',
			}));
		}
	};

	const handleSubmit = e => {
		e.preventDefault();

		// Validate all fields
		const newErrors = {};
		if (!validateEmail(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}
		if (!validatePhone(formData.phone)) {
			newErrors.phone = 'Please enter a valid Bangladeshi phone number';
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			setStatusMessage({ type: 'error', text: 'Please fix the errors above' });
			return;
		}

		setLoading(true);
		setStatusMessage({ type: '', text: '' });

		// Simulate email sending (replace with actual emailjs code)
		setTimeout(() => {
			setLoading(false);
			setStatusMessage({
				type: 'success',
				text: "Message sent successfully! We'll get back to you soon.",
			});
			setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
			setErrors({});
			setTimeout(() => setStatusMessage({ type: '', text: '' }), 5000);
		}, 2000);
	};

	const contactInfo = [
		{
			icon: Mail,
			label: 'Email',
			value: 'info@axiadigitech.com',
			color: '#FF6600',
		},
		{
			icon: Phone,
			label: 'Phone',
			value: '+880 1234-567890',
			color: 'from-purple-700 to-purple-600',
		},
		{
			icon: MapPin,
			label: 'Address',
			value: 'Dhaka, Bangladesh',
			color: 'from-orange-500 to-purple-700',
		},
	];

	return (
		<section id="contact" className="relative pb-20 md:pb-32">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Header */}
				<div className="text-center mb-16">
					<div
						className="inline-flex items-center space-x-2 px-4 py-2
            bg-gradient-to-r from-[#FF6600]/20 to-[#4B0082]/20
            dark:from-[#FF6600]/10 dark:to-[#FF6600]/5
            border border-[#FF6600]/30 rounded-full mb-5"
					>
						<Sparkles className="w-4 h-4 text-[#FF6600]" />
						<span className="text-sm text-white dark:text-[#FF6600]">
							Let's Connect
						</span>
					</div>

					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF6600] mb-6">
						Get In <span className="text-slate-700">Touch</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						Ready to transform your digital presence? Drop us a message and
						let's create something amazing together.
					</p>
				</div>

				<div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
					{/* Contact Info Cards - Left Side */}
					<div className="lg:col-span-2 space-y-6">
						{/* Contact Info Cards */}
						{contactInfo.map((item, idx) => (
							<div
								key={idx}
								className="relative group rounded-2xl overflow-hidden 
         bg-gradient-to-br from-slate-100/90 to-slate-200/90
         dark:from-slate-800/10 dark:to-slate-900/10
         backdrop-blur-sm
         shadow-sm shadow-slate-400/20 dark:shadow-black/30
         px-[30px] py-[40px]
         transition-all duration-300"
							>
								<div className="flex items-start space-x-4">
									<div
										className={`w-14 h-14 bg-[#FF6600] rounded-xl flex items-center justify-center flex-shrink-0 `}
									>
										<item.icon className="w-7 h-7 text-white" />
									</div>
									<div className="flex-1">
										<h3 className="text-lg font-bold text-slate-700 mb-1">
											{item.label}
										</h3>
										<p className="text-slate-600">{item.value}</p>
									</div>
								</div>
							</div>
						))}

						{/* Social Media Section */}
						<div
							className="relative group rounded-2xl overflow-hidden 
         bg-gradient-to-br from-slate-100/90 to-slate-200/90
         dark:from-slate-800/10 dark:to-slate-900/10
         backdrop-blur-sm
         shadow-sm shadow-slate-400/20 dark:shadow-black/30
         px-[30px] py-[40px]
         transition-all duration-300"
						>
							<h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
								<Globe className="w-5 h-5 text-slate-600" />
								Follow Us
							</h3>
							<div className="flex space-x-4">
								<a
									target="_blank"
									rel="noopener noreferrer"
									className="group w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center"
								>
									<Facebook className="w-6 h-6 text-white" />
								</a>
								<button
									onClick={() => alert('WhatsApp integration')}
									className="group w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center "
								>
									<MessageCircle className="w-6 h-6 text-white" />
								</button>
							</div>
						</div>

						{/* Decorative Stats */}
						{/* <div
              className="relative group rounded-2xl overflow-hidden 
         bg-gradient-to-br from-slate-100/90 to-slate-200/90
         dark:from-slate-800/10 dark:to-slate-900/10
         backdrop-blur-sm
         shadow-sm shadow-slate-400/20 dark:shadow-black/30
         px-[30px] py-[40px]
         transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  24/7
                </div>
                <div className="text-gray-400 text-sm">Response Time</div>
              </div>
            </div> */}
					</div>

					{/* Contact Form - Right Side */}
					<div className="lg:col-span-3">
						<div className="relative">
							{/* Glowing Effect */}

							{/* Form Container */}
							<div
								className="relative group rounded-2xl overflow-hidden 
         bg-gradient-to-br from-slate-100/90 to-slate-200/90
         dark:from-slate-800/10 dark:to-slate-900/10
         backdrop-blur-sm
         shadow-sm shadow-slate-400/20 dark:shadow-black/30
         px-[30px] py-[40px]
         transition-all duration-300"
							>
								<div className="space-y-6">
									{/* Shared input style */}
									{(() => {
										const baseInput =
											'w-full px-4 py-3 bg-gray-400/60 rounded-xl text-[#FF6600] placeholder-white focus:outline-none transition-all duration-300';

										return (
											<>
												{/* Full Name */}
												<div className="relative">
													<label className="block text-sm font-semibold text-slate-700 mb-2">
														Full Name *
													</label>
													<input
														type="text"
														name="name"
														value={formData.name}
														onChange={handleChange}
														onFocus={() => setFocusedField('name')}
														onBlur={() => setFocusedField('')}
														required
														className={`${baseInput} ${
															focusedField === 'name'
																? 'border-orange-600'
																: 'border-slate-700'
														}`}
														placeholder="John Doe"
													/>
												</div>

												{/* Email & Phone */}
												<div className="grid md:grid-cols-2 gap-6">
													{/* Email */}
													<div className="relative">
														<label className="block text-sm font-semibold text-slate-700 mb-2">
															Email Address *
														</label>
														<input
															type="email"
															name="email"
															value={formData.email}
															onChange={handleChange}
															onFocus={() => setFocusedField('email')}
															onBlur={() => setFocusedField('')}
															required
															className={`${baseInput} ${
																focusedField === 'email'
																	? 'border-orange-600'
																	: 'border-slate-700'
															}`}
															placeholder="john@example.com"
														/>
													</div>

													{/* Phone */}
													<div className="relative">
														<label className="block text-sm font-semibold text-slate-700 mb-2">
															Phone Number *
														</label>
														<input
															type="text"
															name="phone"
															value={formData.phone}
															onChange={handleChange}
															onFocus={() => setFocusedField('phone')}
															onBlur={() => setFocusedField('')}
															required
															className={`${baseInput} ${
																focusedField === 'phone'
																	? 'border-orange-600'
																	: 'border-slate-700'
															}`}
															placeholder="+8801XXXXXXXXX"
														/>
													</div>
												</div>

												{/* Subject */}
												<div className="relative">
													<label className="block text-sm font-semibold text-slate-700 mb-2">
														Subject *
													</label>
													<input
														type="text"
														name="subject"
														value={formData.subject}
														onChange={handleChange}
														onFocus={() => setFocusedField('subject')}
														onBlur={() => setFocusedField('')}
														required
														className={`${baseInput} ${
															focusedField === 'subject'
																? 'border-orange-600'
																: 'border-slate-700'
														}`}
														placeholder="How can we help you?"
													/>
												</div>

												{/* Message */}
												<div className="relative">
													<label className="block text-sm font-semibold text-slate-700 mb-2">
														Message *
													</label>
													<textarea
														rows={5}
														name="message"
														value={formData.message}
														onChange={handleChange}
														onFocus={() => setFocusedField('message')}
														onBlur={() => setFocusedField('')}
														required
														className={`${baseInput} resize-none ${
															focusedField === 'message'
																? 'border-orange-600'
																: 'border-slate-700'
														}`}
														placeholder="Tell us about your project..."
													/>
												</div>

												{/* Submit Button */}
												<button
													onClick={handleSubmit}
													disabled={loading}
													className={`group w-full px-8 py-4 bg-[#FF6600] text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all ${
														loading ? 'opacity-70 cursor-not-allowed' : ''
													}`}
												>
													{loading ? (
														<>
															<svg
																className="animate-spin h-5 w-5 text-white"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
															>
																<circle
																	className="opacity-25"
																	cx="12"
																	cy="12"
																	r="10"
																	stroke="currentColor"
																	strokeWidth="4"
																/>
																<path
																	className="opacity-75"
																	fill="currentColor"
																	d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
																/>
															</svg>
															<span>Sending...</span>
														</>
													) : (
														<>
															<span>Send Message</span>
															<Send className="w-5 h-5" />
														</>
													)}
												</button>
											</>
										);
									})()}
								</div>

								{/* Status Message */}
								{statusMessage.text && (
									<div
										className={`mt-6 p-4 rounded-xl border ${
											statusMessage.type === 'success'
												? 'bg-green-500/10 border-green-500/30 text-green-400'
												: 'bg-red-500/10 border-red-500/30 text-red-400'
										} flex items-center gap-3 animate-fade-in`}
									>
										{statusMessage.type === 'success' ? (
											<CheckCircle className="w-5 h-5 flex-shrink-0" />
										) : (
											<AlertCircle className="w-5 h-5 flex-shrink-0" />
										)}
										<p className="text-sm font-medium">{statusMessage.text}</p>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
