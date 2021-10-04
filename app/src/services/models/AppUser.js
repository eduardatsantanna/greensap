export class AppUser{
  constructor(data = {}) {
    this.id = data.ID;
    this.name = data.DisplayName;
    this.legalName = data.LegalName;
    this.email = data.Email;
    this.type = data.Type;
    this.status = data.Status;
    this.facebook = data.Facebook;
    this.instagram = data.Instagram;
    this.twitter = data.Twitter;
    this.youtube = data.YouTube;
    this.linkedIn = data.LinkedIn;
    this.webpage = data.WebpageURL;
    this.img = data.ProfileImage_Type || `${process.env.PUBLIC_URL}/assets/example-profile-img/profile.jpg`;
    this.preferredCurrencyCode = data.PreferredCurrency_code;
    this.preferredLanguageCode = data.PreferredLanguage_code;
    this.taxId = data.TaxID;
    this.taxAddress = data.TaxAddress_ID;
    this.createdAt = data.createdAt;
    this.createdBy = data.createdBy;
    this.modifiedAt = data.modifiedAt;
    this.modifiedBy = data.modifiedBy;
  }
}
