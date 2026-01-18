# Google Analytics & Cookie Consent Setup Guide

## Overview

โปรเจ็กต์นี้ได้รวม Google Analytics และ Cookie Consent Banner สำหรับการติดตาม user behavior และการจัดการ privacy

## Components

### 1. CookieConsent Component
ไฟล์: `app/components/CookieConsent.tsx`

- แสดง cookie/privacy notice banner ด้านล่างหน้า
- ผู้ใช้สามารถ Accept หรือ Reject
- บันทึกการเลือก ไว้ใน localStorage
- Responsive design สำหรับ mobile และ desktop

### 2. GoogleAnalytics Component
ไฟล์: `app/components/GoogleAnalytics.tsx`

- โหลด Google Analytics gtag script
- ตั้งค่า default consent เป็น denied (GDPR compliant)
- อัปเดต consent status เมื่อผู้ใช้ทำการเลือก

## Setup Instructions

### Step 1: Get Google Analytics Measurement ID

1. ไปที่ [Google Analytics](https://analytics.google.com)
2. สร้าง account หรือ login ที่มีอยู่
3. สร้าง property ใหม่:
   - ชื่อ: "LaserHub" (หรือชื่ออื่น)
   - Reporting timezone: ตามต้องการ
   - Currency: USD (หรือตามต้องการ)
4. ตัวเลือก Web stream:
   - Website URL: `http://localhost:3000` (สำหรับ dev)
   - Stream name: "LaserHub Website"
5. คัดลอก **Measurement ID** (รูปแบบ: `G_XXXXXXXXXX`)

### Step 2: Configure Environment Variables

1. คัดลอกไฟล์ `.env.local.example` เป็น `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. แก้ไข `.env.local` และใส่ Measurement ID:
   ```env
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G_XXXXXXXXXX
   ```

3. **สำคัญ**: ตรวจสอบให้แน่ใจว่า `.env.local` อยู่ใน `.gitignore` (ป้องกันการ commit credentials)

### Step 3: Restart Development Server

```bash
npm run dev
```

## How It Works

### Flow Diagram

```
User visits website
        ↓
CookieConsent banner appears
        ↓
User clicks Accept/Reject
        ↓
Choice is saved to localStorage
        ↓
Google Analytics gtag updates consent
        ↓
Analytics_storage: granted (Accept) or denied (Reject)
        ↓
Google Analytics tracks/blocks data accordingly
```

### Cookie Storage

- **Key**: `cookie-consent`
- **Value**: `true` (Accept) หรือ `false` (Reject)
- **Location**: Browser localStorage

### Google Analytics Consent States

- **Default**: `analytics_storage: denied` (Compliant with GDPR/CCPA)
- **After Accept**: `analytics_storage: granted`
- **After Reject**: `analytics_storage: denied`

## Features

✅ GDPR/CCPA Compliant
- Default deny consent
- Clear opt-in mechanism
- Easy opt-out
- Privacy policy link

✅ User Experience
- Non-intrusive banner at bottom
- Smooth animations
- Easy to dismiss
- Responsive on all devices

✅ Analytics Integration
- Automatic IP anonymization
- Page tracking
- Real-time event monitoring
- User journey tracking

## Testing

### Test in Development

1. Open browser DevTools (F12)
2. Go to Application → Cookies
3. Look for `cookie-consent` value
4. Test changing consent and reload

### Verify Google Analytics

1. Go to Google Analytics dashboard
2. Go to Real-time → Overview
3. Open your website in browser
4. Should see active user (if Accept consent)

### Check Network Requests

1. Open DevTools → Network
2. Filter by "analytics"
3. Should see requests to `www.google-analytics.com`

## Customization

### Change Banner Text

Edit `app/components/CookieConsent.tsx`:
- Modify the `h3` and `p` text
- Change button labels
- Update privacy policy link

### Change Styles

- Banner background: Change `bg-white` class
- Button colors: Modify `bg-blue-600` and `bg-gray-200`
- Text colors: Change `text-gray-900`, etc.

### Change Banner Position

Default: `fixed bottom-0` (bottom of page)

Options:
- `fixed top-0` - top of page
- `sticky top-0` - sticky at top
- Remove `fixed` for non-sticky

## Troubleshooting

### Google Analytics not showing data

1. **Check Measurement ID**: Verify correct format `G_XXXXXXXXXX`
2. **Check .env.local**: Make sure file exists and ID is set
3. **Check Consent**: User must click Accept for tracking
4. **Check Network**: DevTools → Network should show analytics requests
5. **Wait for data**: GA takes 24-48 hours to show initial data

### Banner not appearing

1. **Check localStorage**: May have old consent stored
2. **Clear browser data**: DevTools → Application → Clear storage
3. **Check component import**: Ensure `CookieConsent` is imported in layout

### Consent updates not working

1. **Check browser console**: Look for errors
2. **Verify gtag exists**: `window.gtag` should be defined
3. **Check localStorage**: Confirm `cookie-consent` is being saved

## Production Checklist

Before deploying to production:

- [ ] Update Measurement ID for production GA property
- [ ] Add production domain to GA property settings
- [ ] Update privacy policy link in banner
- [ ] Test banner appearance on production domain
- [ ] Verify GA data collection in production
- [ ] Monitor initial data for 24-48 hours
- [ ] Set up GA alerts for anomalies

## Privacy Considerations

- ✅ Default deny (Privacy-first)
- ✅ Clear consent mechanism
- ✅ Easy opt-out
- ✅ Anonymized IP
- ⚠️ Should have proper privacy policy
- ⚠️ Ensure compliance with local regulations (GDPR, CCPA, etc.)

## Resources

- [Google Analytics Documentation](https://support.google.com/analytics)
- [Google Consent Mode](https://support.google.com/analytics/answer/9976101)
- [GDPR Compliance](https://gdpr-info.eu/)
- [Next.js Script Component](https://nextjs.org/docs/app/building-your-application/optimizing/scripts)

## Support

For issues or questions about setup, check:
1. Google Analytics official documentation
2. Browser console for errors
3. Network requests in DevTools
4. Local storage for consent data
