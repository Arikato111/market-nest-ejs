import navbar from './components/navbar';
export default function Layout(body: string, header: string[] = []) {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${header.join('')}
    <title>
        <%= title %>
    </title>
</head>

<body>
    ${navbar}
    ${body}
</body>

</html>
    `;
}
