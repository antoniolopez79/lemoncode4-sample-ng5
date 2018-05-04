/**
 * Build basic auth (Base64 encoded, not crypted) Use always over SSL/TLS
 * @param user The user
 * @param password The passoword
 */
export function buildBasicAuth(user: string, password: string): string {
    return 'Basic ' + btoa(user + ':' + password);
}
