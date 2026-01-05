import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CallOption from '../Components/CallOption.jsx';

const ContactUs = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const serviceId = 'service_nj1pbak';
  const templateId = 'template_m87rc1i';
  const publicKey = 'hTQ53mFEKervkN0pO';

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^(?:\+88|88)?01[3-9]\d{8}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatusMessage(t("contact.form.emailError"));
      return;
    }

    if (!validatePhone(phone)) {
      setStatusMessage(t("contact.form.phoneError"));
      return;
    }

    setLoading(true);
    setStatusMessage('');

    const templateParams = {
      name,
      email,
      phone,
      subject,
      message,
      to_email: "zitansalehin123@gmail.com",
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setLoading(false);
        setStatusMessage(t("contact.form.success"));
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
        setTimeout(() => setStatusMessage(''), 3000);
      })
      .catch((error) => {
        setLoading(false);
        setStatusMessage(t("contact.form.error"));
        console.error('EmailJS Error:', error);
        setTimeout(() => setStatusMessage(''), 3000);
      });
  };

  return (
    <div id="contact" className="py-16 md:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-2xl font-bold text-gray-900 dark:text-white">
            {t("sectionTitles.getInTouch")}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("contact.prompt")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 backdrop-blur-md bg-white/60 dark:bg-white/10 border border-white/30 dark:border-white/20 rounded-xl shadow-lg p-4 md:p-8">
          {/* Form Section */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md shadow-sm p-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-white/10 dark:border-white/10"
                  placeholder={t("contact.form.name")}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (!validateEmail(e.target.value)) {
                      setEmailError(t("contact.form.emailError"));
                    } else {
                      setEmailError('');
                    }
                  }}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm p-3 border ${emailError ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500 dark:bg-white/10 dark:border-white/10`}
                  placeholder="your.email@example.com"
                />
                {emailError && <p className="text-sm text-red-600 mt-1">{emailError}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t("contact.form.phone")}
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (!validatePhone(e.target.value)) {
                      setPhoneError(t("contact.form.phoneError"));
                    } else {
                      setPhoneError('');
                    }
                  }}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm p-3 border ${phoneError ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500 dark:bg-white/10 dark:border-white/10`}
                  placeholder="+8801XXXXXXXXX"
                />
                {phoneError && <p className="text-sm text-red-600 mt-1">{phoneError}</p>}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t("contact.form.subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md shadow-sm p-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-white/10 dark:border-white/10"
                  placeholder={t("contact.form.subject")}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md shadow-sm p-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-white/10 dark:border-white/10"
                  placeholder={t("contact.form.message")}
                ></textarea>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-2 rounded-md font-medium transition duration-300 bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-gradient-to-r dark:from-purple-600 dark:to-blue-500 dark:hover:shadow-lg dark:hover:shadow-purple-500/30 dark:transform dark:hover:-translate-y-1 ${loading ? "opacity-70 cursor-not-allowed" : "hover:cursor-pointer"}`}
                >
                  {loading ? (
                    <div className="flex items-center space-x-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"></path>
                      </svg>
                      <span>{t("contact.form.sending")}</span>
                    </div>
                  ) : (
                    t("contact.form.send")
                  )}
                </button>
              </div>
            </form>

            {statusMessage && (
              <p className={`mt-4 text-center text-lg ${statusMessage.includes("Oops") || statusMessage.includes("valid") ? "text-red-600" : "text-green-500"}`}>
                {statusMessage}
              </p>
            )}
          </div>

          {/* Info Section */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{t("sectionTitles.contactInfo")}</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">{t("contact.info.title")}</p>

            <dl className="mt-8 space-y-6">
              <div className="flex">
                <dt className="text-gray-500 dark:text-gray-400">{t("contact.info.email")}:</dt>
                <dd className="ml-2 text-gray-900 dark:text-white">info@axiadigitech.com</dd>
              </div>
              <div className="flex">
                <dt className="text-gray-500 dark:text-gray-400">{t("contact.info.phoneLabel")}:</dt>
                <dd className="ml-2 text-gray-900 dark:text-white">{t("contact.info.phoneNumber")}</dd>
              </div>
              <div className="flex">
                <dt className="text-gray-500 dark:text-gray-400">{t("contact.info.addressLabel")}</dt>
                <dd className="ml-2 text-gray-900 dark:text-white">{t("contact.info.address")}</dd>
              </div>
            </dl>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">{t("sectionTitles.followUs")}</h4>

              <div className="mt-4 flex space-x-4">
                <a href="https://www.facebook.com/share/15x9MorRiC/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" className="w-6 h-6">
                    <path className="fill-blue-600 dark:fill-white" d="M40,0 C17.9,0 0,17.9 0,40 C0,59.9 14.6,76.2 33.8,79.4 L33.8,51.5 L23.6,51.5 L23.6,40 L33.8,40 L33.8,31.2 C33.8,21.2 39.8,15.6 48.8,15.6 C53.1,15.6 57.6,16.4 57.6,16.4 L57.6,26 L52.6,26 C47.7,26 46.2,29 46.2,32.1 L46.2,40 L57.1,40 L55.3,51.5 L46.2,51.5 L46.2,79.4 C65.4,76.2 80,59.9 80,40 C80,17.9 62.1,0 40,0 Z" />
                  </svg>
                </a>
                <button type="button" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">
                  <CallOption />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
