export function getAdminEmailsFromEnv(): string[] {
  // Server-side'da çalışıyor mu kontrol et
  if (typeof window === "undefined") {
    const adminEmails = process.env.ADMIN_EMAILS || "";
    return adminEmails
      .split(",")
      .map((email) => email.trim().toLowerCase())
      .filter((email) => email.length > 0 && email.includes("@"));
  }

  return [];
}

export function isAdminEmail(email: string): boolean {
  if (!email) return false;

  const adminEmails = getAdminEmailsFromEnv();
  return adminEmails.includes(email.toLowerCase().trim());
}

export function getUserRole(email: string): string[] {
  if (isAdminEmail(email)) {
    return ["admin", "user"];
  }
  return ["user"];
}

// Client-side için güvenli admin listesi (sadece gösterim için)
export function getAdminEmailsList(): string[] {
  if (typeof window === "undefined") {
    return getAdminEmailsFromEnv();
  }

  // Client-side'da statik liste göster
  return [
    "asamedgrl@gmail.com",
    "admin@kayra.com",
    "manager@kayra.com",
    "supervisor@kayra.com",
    "developer@kayra.com",
  ];
}
