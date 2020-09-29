# tarikh

## کتابخانه‌ی کار با تاریخ‌های هـ.شمسی، هـ.قمری، میلادی

> منبع اصلی: <https://jdf.scr.ir/>

اخطار: درحال توسعه...

نصب با دستور  
‍‍‍‍‍‍‍```npm i tarikh```

-------------------------------------------------

ابتدا آشنایی با   
**تبدیل مستقیم تاریخ‌های اصلی**

-------------------------------------------------
## تبدیل تاریخ از میلادی به هجری شمسی (جلالی)

+ gregorian_to_persian :نام اصلی
+ miladi_be_shamsi :نام مستعار

> **ورودی تاریخ میلادی**
> ```js
> gregorian_to_persian(year, month, day)
> /* یا */
> miladi_be_shamsi(year, month, day)
> ```
> 
> **خروجی تاریخ هـ.شمسی به‌صورت آرایه**
> ```js
> [year, month, day]
> ```
> *int (integer) :همگی اعداد از نوع صحیح*

روش کبیسه‌بندی میلادی: گرگوری و شمسی: ۳۳ساله جلالی که در محدوده‌ی سال‌های ۱۱۷۸ تا ۱۶۳۳ هـ.شمسی با روش اعتدال بهاری، مشترک می‌باشند

-------------------------------------------------
## تبدیل تاریخ از هجری شمسی به میلادی

+ persian_to_gregorian :نام اصلی
+ shamsi_be_miladi :نام مستعار

> **ورودی تاریخ میلادی**
> ```js
> persian_to_gregorian(year, month, day)
> /* یا */
> shamsi_be_miladi(year, month, day)
> ```
> 
> **خروجی تاریخ هـ.شمسی به‌صورت آرایه**
> ```js
> [year, month, day]
> ```
> *int (integer) :همگی اعداد از نوع صحیح*

روش کبیسه‌بندی میلادی: گرگوری و شمسی: ۳۳ساله جلالی که در محدوده‌ی سال‌های ۱۱۷۸ تا ۱۶۳۳ هـ.شمسی با روش اعتدال بهاری، مشترک می‌باشند

-------------------------------------------------
## تبدیل تاریخ از میلادی به هجری قمری هلالی (رؤیت ماه ایران)

+ gregorian_to_islamic :نام اصلی
+ miladi_be_ghamari :نام مستعار

> **ورودی تاریخ میلادی**
> ```js
> gregorian_to_islamic(year, month, day)
> /* یا */
> miladi_be_ghamari(year, month, day)
> ```
> 
> **خروجی تاریخ هـ.قمری هلالی به‌صورت آرایه**
> ```js
> [year, month, day]
> ```
> *int (integer) :همگی اعداد از نوع صحیح*

نتیجه برای سال‌های اخیر، طبق رؤیت هلال ماه ایران و برای سال‌های دورتر و نیز آینده، طبق الگوریتم ریاضی محاسبه می‌شود  
تذکّر: نتیجه برای زمان آینده، صرفاً در حد تخمین و گمان است و برای انجام تکالیف شرعی (مثل روزه‌داری) باید اخبار رؤیت هلال را از رسانه‌ها دنبال نمایید

-------------------------------------------------
## تبدیل تاریخ از هجری قمری هلالی به میلادی

+ islamic_to_gregorian :نام اصلی
+ ghamari_be_miladi :نام مستعار

> **ورودی تاریخ هـ.قمری هلالی**
> ```js
> islamic_to_gregorian(year, month, day)
> /* یا */
> ghamari_be_miladi(year, month, day)
> ```
> 
> **خروجی تاریخ میلادی به‌صورت آرایه**
> ```js
> [year, month, day]
> ```
> *int (integer) :همگی اعداد از نوع صحیح*

ورودی برای سال‌های اخیر، طبق رؤیت هلال ماه ایران. البتّه با تمرکز اصلی بر قبل‌و‌بعد ماه مبارک رمضان

-------------------------------------------------
## تبدیل تاریخ از هجری شمسی به هجری قمری هلالی (رؤیت ماه ایران)

+ persian_to_islamic :نام اصلی
+ shamsi_be_ghamari :نام مستعار

> **ورودی تاریخ هـ.شمسی**
> ```js
> persian_to_islamic(year, month, day)
> /* یا */
> shamsi_be_ghamari(year, month, day)
> ```
> 
> **خروجی تاریخ هـ.قمری هلالی به‌صورت آرایه**
> ```js
> [year, month, day]
> ```
> *int (integer) :همگی اعداد از نوع صحیح*

نتیجه برای سال‌های اخیر، طبق رؤیت هلال ماه ایران و برای سال‌های دورتر و نیز آینده، طبق الگوریتم ریاضی محاسبه می‌شود  
تذکّر: نتیجه برای زمان آینده، صرفاً در حد تخمین و گمان است و برای انجام تکالیف شرعی (مثل روزه‌داری) باید اخبار رؤیت هلال را از رسانه‌ها دنبال نمایید

-------------------------------------------------
## تبدیل تاریخ از هجری قمری هلالی به هجری شمسی

+ islamic_to_persian :نام اصلی
+ ghamari_be_shamsi :نام مستعار

> **ورودی تاریخ هـ.قمری هلالی**
> ```js
> islamic_to_persian(year, month, day)
> /* یا */
> ghamari_be_shamsi(year, month, day)
> ```
> 
> **خروجی تاریخ هـ.شمسی به‌صورت آرایه**
> ```js
> [year, month, day]
> ```
> *int (integer) :همگی اعداد از نوع صحیح*

ورودی برای سال‌های اخیر، طبق رؤیت هلال ماه ایران. البتّه با تمرکز اصلی بر قبل‌و‌بعد ماه مبارک رمضان

-------------------------------------------------

... و در ادامه  
**بدون توجّه به رؤیت هلال ماه**

-------------------------------------------------
## تبدیل تاریخ از میلادی به هجری قمری الگوریتمی (بدون‌توجّه به هلال ماه)

+ gregorian_to_islamicA :نام اصلی
+ miladi_be_ghamariA :نام مستعار

> **ورودی تاریخ میلادی**
> ```js
> gregorian_to_islamicA(year, month, day)
> /* یا */
> miladi_be_ghamariA(year, month, day)
> ```
> 
> **خروجی تاریخ هـ.قمری الگوریتمی به‌صورت آرایه**
> ```js
> [year, month, day]
> ```
> *int (integer) :همگی اعداد از نوع صحیح*

نتیجه برای همه‌ی سال‌ها، طبق الگوریتم ریاضی ثابت است. تذکّر: این تاریخ خروجی برای انجام تکالیف شرعی (مثل روزه‌داری) مناسب نیست

-------------------------------------------------
## تبدیل تاریخ از هجری قمری الگوریتمی (بدون‌توجّه به هلال ماه) به میلادی

+ islamicA_to_gregorian :نام اصلی
+ ghamariA_be_miladi :نام مستعار

> **ورودی تاریخ هـ.قمری الگوریتمی**
> ```js
> islamicA_to_gregorian(year, month, day)
> /* یا */
> ghamariA_be_miladi(year, month, day)
> ```
> 
> **خروجی تاریخ میلادی به‌صورت آرایه**
> ```js
> [year, month, day]
> ```
> *int (integer) :همگی اعداد از نوع صحیح*

ورودی طبق الگوریتم ریاضی و غیر وابسته به رؤیت هلال ماه

-------------------------------------------------
## تبدیل تاریخ از هجری شمسی به هجری قمری الگوریتمی (بدون‌توجّه به هلال ماه)

+ persian_to_islamicA :نام اصلی
+ shamsi_be_ghamariA :نام مستعار

> **ورودی تاریخ هـ.شمسی**
> ```js
> persian_to_islamicA(year, month, day)
> /* یا */
> shamsi_be_ghamariA(year, month, day)
> ```
> 
> **خروجی تاریخ هـ.قمری الگوریتمی به‌صورت آرایه**
> ```js
> [year, month, day]
> ```
> *int (integer) :همگی اعداد از نوع صحیح*

نتیجه برای همه‌ی سال‌ها، طبق الگوریتم ریاضی ثابت است. تذکّر: این تاریخ خروجی برای انجام تکالیف شرعی (مثل روزه‌داری) مناسب نیست

-------------------------------------------------
## تبدیل تاریخ از هجری قمری الگوریتمی (بدون‌توجّه به هلال ماه) به هجری شمسی

+ islamicA_to_persian :نام اصلی
+ ghamariA_be_shamsi :نام مستعار

> **ورودی تاریخ هـ.قمری الگوریتمی**
> ```js
> islamicA_to_persian(year, month, day)
> /* یا */
> ghamariA_be_shamsi(year, month, day)
> ```
> 
> **خروجی تاریخ هـ.شمسی به‌صورت آرایه**
> ```js
> [year, month, day]
> ```
> *int (integer) :همگی اعداد از نوع صحیح*

ورودی طبق الگوریتم ریاضی و غیر وابسته به رؤیت هلال ماه

-------------------------------------------------

کار کردن با  
**مُهر زمانی یونیکس**

-------------------------------------------------

-------------------------------------------------

کار کردن با  
**تاریخ (روزشمار عددی) جولیان**

-------------------------------------------------

-------------------------------------------------

و همچنین  
**تبدیل بین مُهر زمانی یونیکس و تاریخ (روزشمار عددی) جولیان**

-------------------------------------------------

-------------------------------------------------

و  
**توابع تشخیص سال کبیسه**

-------------------------------------------------

-------------------------------------------------

و درنهایت  
**برخی توابع کمکی مفید**

-------------------------------------------------






```js
  
,
    islamic_to_julianDateA
ghamari_be_tarikheJulianA,
  +,
  julianDate_to_islamicA
tarikheJulian_be_ghamariA,
  +,
  gregorian_to_julianDate
miladi_be_tarikheJulian,
  +,
  persian_to_julianDate
shamsi_be_tarikheJulian,
  +,
  julianDate_to_persian
tarikheJulian_be_shamsi,
  +,
  julianDate_to_gregorian
tarikheJulian_be_miladi,
  +,
  islamic_to_julianDateA
ghamari_be_tarikheJulianA,
  +,
  julianDate_to_islamicA
tarikheJulian_be_ghamariA,
  +,
  julianDate_to_islamic
tarikheJulian_be_ghamari,
  ,
  islamic_to_julianDate
ghamari_be_tarikheJulian,
  ,
  julianDate_to_all
tarikheJulian_be_hameh,
  +,

  +,

  ,
  timeStamp_to_all
mohreZaman_be_hameh,
  ,
  timeStamp_to_persian
mohreZaman_be_shamsi,
  ,
  timeStamp_to_islamic
mohreZaman_be_ghamari,
  ,
  timeStamp_to_gregorian
mohreZaman_be_miladi,
  ,
  persian_to_timeStamp
shamsi_be_mohreZaman,
  ,
  islamic_to_timeStamp
ghamari_be_mohreZaman,
  ,
  gregorian_to_timeStamp
miladi_be_mohreZaman,
  ,
  is_persian_Leap
kabiseh_shamsi_hast,
  ,
  is_gregorian_Leap
kabiseh_miladi_hast,
  ,
  is_islamic_Leap
kabiseh_ghamari_hast,
  ,
  timeStamp_to_julianDate
mohreZaman_be_tarikheJulian,
  ,
  julianDate_to_timeStamp
tarikheJulian_be_mohreZaman
```



















### توابع در دسترس (موقّت، احتمال تغییر نام در نسخه‌های بعدی):


>
>  toFaNum: (strEnNum) => "strFaNum"
>
>  toEnNum:(strFaNum) => "strEnNum"
>
>  to2Digit: (num1or2Digit) => num2Digit



> حمایت مالی: <https://scr.ir/pardakht/?hemayat=tarikh_npm>