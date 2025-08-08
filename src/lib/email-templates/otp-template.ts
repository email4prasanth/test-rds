export const otpTemplate = ({ key1: userName, key2: otp }: { key1: string; key2: string }) => `

    <html>
      <head>
          <title>hubino OTP</title>
      </head>
      <body>
          <h2>Hello ${userName},</h2>
          <p>Your OTP is : ${otp}</p>
          <p>Thank you for using hubino.</p>
      </body>
    </html>
  `;
