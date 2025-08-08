export const setPasswordTemplate = ({ key1: userName, key2: httpLink }: { key1: string; key2: string }) => `

<html>
    <head>
        <title>hubino Account Verification</title>
    </head>
    <body>
        <h2>Hello ${userName},</h2>
        <p>You have been invited to join hubino. Please verify your account by clicking the link below:</p>
        ${httpLink ? `<p>Here's your link: ${httpLink}</p>` : ''}
        <p>Thank you for using hubino.</p>
    </body>
</html>
`;
