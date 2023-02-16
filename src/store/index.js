import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    menus: [{
        name: "آشا",
        icon: "fa-solid fa-house",
        link: "/",
      },
      // submenus: [
      {
        name: "در باره ما",
        icon: "fa-solid fa-mouse",
        link: "about-us",
      },
      {
        name: "گالری تصاویر",
        icon: "fa-solid fa-mouse",
        link: "gallery",
      },
      // ],
      // },
      {
        name: "خدمات ما",
        icon: "fa-solid fa-briefcase",
        link: "services",
      },
      // submenus: [
      {
        name: "گواهی نامه ISO",
        icon: "fa-solid fa-mouse",
        link: "iso",
      },
      {
        name: "پروانه ساخت تجهیزات پزشکی",
        icon: "fa-solid fa-mouse",
        link: "jfdhg",
      },
      {
        name: "مهندسی تولید",
        icon: "fa-solid fa-mouse",
        link: "dsff",
      },
      {
        name: "دانش بنیان",
        icon: "fa-solid fa-mouse",
        link: "fgddfg",
      },
      {
        name: "آموزش",
        icon: "fa-solid fa-mouse",
        link: "fgdgf",
      },
      // ],
      // },
      {
        name: "تماس با ما",
        icon: "fa-solid fa-graduation-cap",
        link: "contact-us",
        // submenus: []
      },
    ],
    socials: [{
        title: "instagram",
        icon: "fa-brands fa-instagram",
        href: "https://www.instagram.com/ashac.ir/",
      },
      {
        title: "telegram",
        icon: "fa-brands fa-telegram",
        href: "http://t.me/",
      },
      {
        title: "linkedin",
        icon: "fab fa-linkedin",
        href: "https://www.linkedin.com/in/ashac-ir/",
      },
      {
        title: "whatsapp",
        icon: "fab fa-whatsapp",
        href: "https://api.whatsapp.com/send?phone=989151043668",
      },
    ],
    services: [{
        name: 'license',
        title: 'پروانه ساخت',
        id: 'license-tab-md',
        controls: 'license-md',
        items: [{
            title: 'پروانه ساخت تجهیزات و ملزومات پزشکی',
            img: '-ساخت-تجهیزات-پزشکی-e1610527337196.jpg',
            desc: 'مشاوران ما با شناخت کامل الزامات و نیازهای تولید تجهیزات پزشکی، تهیه اسناد و دریافت پروانه تولید تجهیزات پزشکی را برای سازمان شما بسیار آسان خواهند نمود. ما با تسلط در تهیه مدارک و تکنیکال فایل محصول ضمن مطابقت مداوم با الزامات مشتری، تمام فرآیند اخذ پروانه تولید محصول را برای سازمان شما انجام می دهیم.',
            style: 'padding_0 margin_right20'
          },
          {
            title: 'پروانه تولید تجهیزات و ملزومات دارویی',
            img: 'اداره-کل-نظارت-و-ارزیابی-تجهیزات-و-ملزومات-پزشکی.jpg',
            desc: 'در بازار رقابتی امروز ، تمرکز بر شایستگی های اصلی شما برای به دست آوردن و حفظ رهبری صنعت بسیار مهم است. تیم تخصصی ما با بررسی و ارزیابی تولیدات شما، محصول شما را به سوی دریافت گواهی دانش بنیان پیش خواهد برد تا علاوه بر کسب اعتبار، از مزایا و حمایت های قانونی محصولات دانش بنیان برخوردار شوید.',
            // style: 'padding_0 margin_top70p margin_right20 margin_left20'
            style: 'padding_0 margin_right20'
          },
          {
            title: 'دریافت مجوزهای سازمان غذا و دارو',
            img: 'education-1-1.png',
            desc: 'در بازار رقابتی امروز ، تمرکز بر شایستگی های اصلی شما برای به دست آوردن و حفظ رهبری صنعت بسیار مهم است. تیم تخصصی ما با بررسی و ارزیابی تولیدات شما، محصول شما را به سوی دریافت گواهی دانش بنیان پیش خواهد برد تا علاوه بر کسب اعتبار، از مزایا و حمایت های قانونی محصولات دانش بنیان برخوردار شوید.',
            style: 'padding_0 margin_right20'
            // style: 'padding_0 margin_left20'
          },
        ]
      },
      {
        name: 'iso',
        title: 'ایزو',
        id: 'iso-tab-md',
        controls: 'iso-md',
        items: [{
            title: 'ISO 13485: 2016',
            img: 'ISO-13485-2016-1.png',
            desc: 'با پیاده سازی، اجرا و پشتیبانی سیستم های مدیریت کیفیت و تضمین کیفیت شما در تمام مراحل فرآیند، ما به شما و شرکت شما کمک می کنیم تا بتوانید در کوتاه ترین زمان ممکن موفق به اخذ گواهینامه ISO 13485 / 9001 شوید. ما به شرکت‌ها کمک می کنیم تا بهترین و مناسب ترین سازمان صدور گواهینامه ISO را انتخاب کنند.',
            style: 'padding_0 margin_right20'
          },
          {
            title: 'ISO 9001: 2015',
            img: 'ISO-13485-2016-1.png',
            desc: 'با پیاده سازی، اجرا و پشتیبانی سیستم های مدیریت کیفیت و تضمین کیفیت شما در تمام مراحل فرآیند، ما به شما و شرکت شما کمک می کنیم تا بتوانید در کوتاه ترین زمان ممکن موفق به اخذ گواهینامه ISO 13485 / 9001 شوید. ما به شرکت‌ها کمک می کنیم تا بهترین و مناسب ترین سازمان صدور گواهینامه ISO را انتخاب کنند.',
            style: 'padding_0 margin_right20'
            // style: 'padding_0 margin_top70p margin_right20 margin_left20'
          },
          {
            title: 'ISO IMS: 2018',
            img: 'ISO-13485-2016-1.png',
            desc: 'با پیاده سازی، اجرا و پشتیبانی سیستم های مدیریت کیفیت و تضمین کیفیت شما در تمام مراحل فرآیند، ما به شما و شرکت شما کمک می کنیم تا بتوانید در کوتاه ترین زمان ممکن موفق به اخذ گواهینامه ISO 13485 / 9001 شوید. ما به شرکت‌ها کمک می کنیم تا بهترین و مناسب ترین سازمان صدور گواهینامه ISO را انتخاب کنند.',
            style: 'padding_0 margin_right20'
            // style: 'padding_0 margin_left20'
          },
        ]
      },
      {
        name: 'knowledge',
        title: 'دانش بنیان',
        id: 'knowledge-tab-md',
        controls: 'knowledge-md',
        items: [{
            title: 'دریافت گواهی دانش بنیان',
            img: 'education-1-1.png',
            desc: 'ما برنامه های آموزشی ارائه می دهیم که برای معرفی اصول، فرآیندها ، اصطلاحات و الزامات سیستم مدیریت کیفت، آنالیز و مدیریت ریسک، تدوین FMEA، الزامات تولید تجهیزات پزشکی و تکوین محصول طراحی شده است. آموزش‌های ما کاربردی و مطابق نیاز سازمان شما طراحی و اجرا خواهد شد.',
            style: 'padding_0 margin_right20'
          },
          {
            title: 'دریافت مجوز واحد فناور (پارک علم و فناوری)',
            img: 'education-1-1.png',
            desc: 'ما به سازمانهای دارای گواهینامه ISO کمک می کنیم تا پس از اتمام فرایند صدور گواهینامه، ضمن حفظ سیستم مدیریت کیفیت خود، با ایجاد یک فرایند بهبود مستمر همگام با رشد شرکت، توانایی حل مشکلات و چالش های جدید را در نیروها و بخش های شرکت ارتقا بخشیم. تیم ما با در اختیار داشتن تخصص های لازم، می‌توانند مشاور نیازهای سازمان شما در بخش هایی چون تولید محصولات، طراحی فرآیندها، برنامه ریزی، کنترل کیفیت و ... باشند.',
            style: 'padding_0 margin_right20'
            // style: 'padding_0 margin_top70p margin_right20 margin_left20'
          }
        ]
      },
      {
        name: 'engineering',
        title: 'خدمات مهندسی',
        id: 'engineering-tab-md',
        controls: 'engineering-md',
        items: [{
            title: 'تهیه تکنیکال فایل و مستندات آن',
            img: 'education-1-1.png',
            desc: 'ما برنامه های آموزشی ارائه می دهیم که برای معرفی اصول، فرآیندها ، اصطلاحات و الزامات سیستم مدیریت کیفت، آنالیز و مدیریت ریسک، تدوین FMEA، الزامات تولید تجهیزات پزشکی و تکوین محصول طراحی شده است. آموزش‌های ما کاربردی و مطابق نیاز سازمان شما طراحی و اجرا خواهد شد.',
            style: 'padding_0 margin_right20'
          },
          {
            title: 'تهیه آنالیز ریسک و مستندات فنی',
            img: 'education-1-1.png',
            desc: 'ما به سازمانهای دارای گواهینامه ISO کمک می کنیم تا پس از اتمام فرایند صدور گواهینامه، ضمن حفظ سیستم مدیریت کیفیت خود، با ایجاد یک فرایند بهبود مستمر همگام با رشد شرکت، توانایی حل مشکلات و چالش های جدید را در نیروها و بخش های شرکت ارتقا بخشیم. تیم ما با در اختیار داشتن تخصص های لازم، می‌توانند مشاور نیازهای سازمان شما در بخش هایی چون تولید محصولات، طراحی فرآیندها، برنامه ریزی، کنترل کیفیت و ... باشند.',
            style: 'padding_0 margin_right20'
            // style: 'padding_0 margin_top70p margin_right20 margin_left20'
          },
          {
            title: 'امکان سنجی تولید محصول و تهیه BP',
            img: 'education-1-1.png',
            desc: 'ما به سازمانهای دارای گواهینامه ISO کمک می کنیم تا پس از اتمام فرایند صدور گواهینامه، ضمن حفظ سیستم مدیریت کیفیت خود، با ایجاد یک فرایند بهبود مستمر همگام با رشد شرکت، توانایی حل مشکلات و چالش های جدید را در نیروها و بخش های شرکت ارتقا بخشیم. تیم ما با در اختیار داشتن تخصص های لازم، می‌توانند مشاور نیازهای سازمان شما در بخش هایی چون تولید محصولات، طراحی فرآیندها، برنامه ریزی، کنترل کیفیت و ... باشند.',
            style: 'padding_0 margin_right20'
            // style: 'padding_0 margin_left20'
          },
          {
            title: 'طراحی محصول و فرآیند، مهندسی معکوس',
            img: 'education-1-1.png',
            desc: 'ما به سازمانهای دارای گواهینامه ISO کمک می کنیم تا پس از اتمام فرایند صدور گواهینامه، ضمن حفظ سیستم مدیریت کیفیت خود، با ایجاد یک فرایند بهبود مستمر همگام با رشد شرکت، توانایی حل مشکلات و چالش های جدید را در نیروها و بخش های شرکت ارتقا بخشیم. تیم ما با در اختیار داشتن تخصص های لازم، می‌توانند مشاور نیازهای سازمان شما در بخش هایی چون تولید محصولات، طراحی فرآیندها، برنامه ریزی، کنترل کیفیت و ... باشند.',
            style: 'padding_0 margin_right20'
            // style: 'padding_0 margin_top170'
          }
        ]
      },
      {
        name: 'support',
        title: 'پشتیبانی',
        id: 'support-tab-md',
        controls: 'support-md',
        items: [{
            title: 'آموزش سیستم های مدیریت کیفیت',
            img: 'education-1-1.png',
            desc: 'ما برنامه های آموزشی ارائه می دهیم که برای معرفی اصول، فرآیندها ، اصطلاحات و الزامات سیستم مدیریت کیفت، آنالیز و مدیریت ریسک، تدوین FMEA، الزامات تولید تجهیزات پزشکی و تکوین محصول طراحی شده است. آموزش‌های ما کاربردی و مطابق نیاز سازمان شما طراحی و اجرا خواهد شد.',
            style: 'padding_0 margin_right20'
          },
          {
            title: 'آموزش مهندسی محصول و مستندات فنی ',
            img: 'education-1-1.png',
            desc: 'ما به سازمانهای دارای گواهینامه ISO کمک می کنیم تا پس از اتمام فرایند صدور گواهینامه، ضمن حفظ سیستم مدیریت کیفیت خود، با ایجاد یک فرایند بهبود مستمر همگام با رشد شرکت، توانایی حل مشکلات و چالش های جدید را در نیروها و بخش های شرکت ارتقا بخشیم. تیم ما با در اختیار داشتن تخصص های لازم، می‌توانند مشاور نیازهای سازمان شما در بخش هایی چون تولید محصولات، طراحی فرآیندها، برنامه ریزی، کنترل کیفیت و ... باشند.',
            style: 'padding_0 margin_top70p margin_right20 margin_left20'
          },
          {
            title: 'آموزش تهیه تکنیکال فایل و مدیریت ریسک',
            img: 'education-1-1.png',
            desc: 'ما به سازمانهای دارای گواهینامه ISO کمک می کنیم تا پس از اتمام فرایند صدور گواهینامه، ضمن حفظ سیستم مدیریت کیفیت خود، با ایجاد یک فرایند بهبود مستمر همگام با رشد شرکت، توانایی حل مشکلات و چالش های جدید را در نیروها و بخش های شرکت ارتقا بخشیم. تیم ما با در اختیار داشتن تخصص های لازم، می‌توانند مشاور نیازهای سازمان شما در بخش هایی چون تولید محصولات، طراحی فرآیندها، برنامه ریزی، کنترل کیفیت و ... باشند.',
            style: 'padding_0 margin_left20'
          },
          {
            title: 'پشتیبانی انجام امور مهندسی و مشاوره مدیریت',
            img: 'education-1-1.png',
            desc: 'ما به سازمانهای دارای گواهینامه ISO کمک می کنیم تا پس از اتمام فرایند صدور گواهینامه، ضمن حفظ سیستم مدیریت کیفیت خود، با ایجاد یک فرایند بهبود مستمر همگام با رشد شرکت، توانایی حل مشکلات و چالش های جدید را در نیروها و بخش های شرکت ارتقا بخشیم. تیم ما با در اختیار داشتن تخصص های لازم، می‌توانند مشاور نیازهای سازمان شما در بخش هایی چون تولید محصولات، طراحی فرآیندها، برنامه ریزی، کنترل کیفیت و ... باشند.',
            style: 'padding_0 margin_top170'
          },
          {
            title: 'پشتیبانی سیستم های مدیریت کیفیت',
            img: 'education-1-1.png',
            desc: 'ما به سازمانهای دارای گواهینامه ISO کمک می کنیم تا پس از اتمام فرایند صدور گواهینامه، ضمن حفظ سیستم مدیریت کیفیت خود، با ایجاد یک فرایند بهبود مستمر همگام با رشد شرکت، توانایی حل مشکلات و چالش های جدید را در نیروها و بخش های شرکت ارتقا بخشیم. تیم ما با در اختیار داشتن تخصص های لازم، می‌توانند مشاور نیازهای سازمان شما در بخش هایی چون تولید محصولات، طراحی فرآیندها، برنامه ریزی، کنترل کیفیت و ... باشند.',
            style: 'padding_0 margin_left20 '
            // style: 'padding_0 margin_top70p margin_right20 margin_left20'
          }
        ]
      }
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
});