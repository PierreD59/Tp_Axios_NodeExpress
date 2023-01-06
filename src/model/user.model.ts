/** A partir de cette classe, définir une API permetant de gérer nos users
 *  Contraintes :
 *  La date de naissance et la nationnalité sont facultatives
 *  la date d'inscription doit être au format d/M/Y hh:mm:ss
 */

export default class UserModel {

  lastName: string;
  firstName: string;
  birthDate?: string;
  registrationDate: string;
  nationnality?: string;

  constructor(
    lastName: string,
    firstName: string,
    birthDate?: string,
    nationnality?: string
  ) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthDate = birthDate || "";
    this.registrationDate = this.dateNow();
    this.nationnality = nationnality || "";
  }

  dateNow = (): string => {
    let dateTime = new Date();
    let date = `${dateTime.getDate()}-${
      dateTime.getMonth() + 1
    }-${dateTime.getFullYear()}`;
    let hours = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`;
    let fullDate = `${date} ${hours}`;
    return fullDate;
  };
}
