<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';
require __DIR__ . '/phpmailer/Exception.php';

// ==== BASIC SECURITY CHECK ====
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Method Not Allowed';
    exit;
}

// ==== HONEYPOT (anti-spam) ====
$honeypot = $_POST['company'] ?? '';
if (!empty($honeypot)) {
    // Bot – pretend success
    echo 'OK';
    exit;
}

// ==== GET FORM DATA ====
$name      = trim($_POST['name']    ?? '');
$email     = trim($_POST['email']   ?? '');
$phone     = trim($_POST['phone']   ?? '');
$service   = trim($_POST['service'] ?? '');
$message   = trim($_POST['message'] ?? '');
$formType  = $_POST['form_type']    ?? 'contact';

// Basic validation
if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo 'Please fill in all required fields.';
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo 'Invalid email address.';
    exit;
}

// ==== SMTP CONFIG (GMAIL) ====
$smtpHost   = 'smtp.gmail.com';
$smtpUser   = 'ashiqsysitco@gmail.com';       // TODO: change
$smtpPass   = 'wbhxvmcioveoglee';    // TODO: change
$smtpPort   = 587;
$smtpSecure = PHPMailer::ENCRYPTION_STARTTLS;

$ownerEmail = 'ashique.raj@cloudtechnologiesltd.co.uk';      // TODO: change
$fromName   = 'Jane Gore Therapy';

try {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = $smtpSecure;
    $mail->Port       = $smtpPort;

    // ========= 1) EMAIL TO OWNER =========
    $mail->setFrom($smtpUser, $fromName);
    $mail->addAddress($ownerEmail);
    $mail->addReplyTo($email, $name);

    $subjectLine = ($formType === 'appointment')
        ? 'New Appointment Request'
        : 'New Contact Enquiry';

    if ($service !== '') {
        $subjectLine .= " - {$service}";
    }

    $mail->isHTML(true);
    $mail->Subject = $subjectLine;
    $mail->Body    = "
        <h2>{$subjectLine}</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Service:</strong> {$service}</p>
        <p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>
    ";
    $mail->AltBody = "New enquiry:\n
Name: {$name}\n
Email: {$email}\n
Phone: {$phone}\n
Service: {$service}\n
Message:\n{$message}
    ";

    $mail->send(); // send to owner

    // ========= 2) AUTO-REPLY TO CLIENT =========
    $mail->clearAddresses();
    $mail->clearReplyTos();

    $mail->addAddress($email, $name);
    $mail->Subject = 'We received your enquiry – Jane Gore Therapy';
    $mail->Body    = "
        <p>Hi {$name},</p>
        <p>Thank you for reaching out to Jane Gore Therapy. We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Summary of your message:</strong></p>
        <p><strong>Service:</strong> {$service}</p>
        <p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>
        <br>
        <p>Warm regards,<br>Jane Gore Therapy</p>
    ";
    $mail->AltBody = "Hi {$name},\n\nThank you for contacting Jane Gore Therapy. We have received your message and will get back to you soon.\n\nService: {$service}\nMessage:\n{$message}\n\nWarm regards,\nJane Gore Therapy";

    $mail->send(); // send to visitor

    // ✅ FRONTEND USES THIS
    echo 'OK';

} catch (Exception $e) {
    http_response_code(500);
    echo 'Something went wrong. Please try again later.';
}
