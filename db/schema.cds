using { cuid, managed, temporal, Country, Currency, Language } from '@sap/cds/common';
//namespace com.greensap;

context com.greensap {

    aspect standard : cuid, managed {};

    aspect social {
        Email       : String;
        YouTube     : String;
        Facebook    : String;
        Instagram   : String;
        Twitter     : String;
        LinkedIn    : String;
        WebpageURL  : String;
    };

    type Coordinate {
        Latitude    : Double;
        Longitude   : Double;
    };

    type Image {
        URI : String @Core.MediaType : Type;
        Type : String @Core.IsMediaType;
    };

    entity AppUsers : standard, social {
        Type                : String @assert.range enum { individual; corporate; nonprofit; certifier; } not null default 'individual';
        Status              : String @assert.range enum { none; email; complete; } not null default 'none';
        DisplayName         : String(255);
        LegalName           : String;
        TaxID               : String;
        TaxAddress          : Association to one Addresses;
        ProfileImage        : Image;
        PreferredCurrency   : Currency;
        PreferredLanguage   : Language;
        Following           : Association to many ProjectFollowers on Following.AppUser = $self;
    };

    entity Individuals {
        key AppUser : Association to one AppUsers not null;
        Employer    : Association to one Corporations;
    };

    entity Corporations {
        key AppUser : Association to one AppUsers not null;
        Employees   : Composition of many Individuals on Employees.Employer = $self;
    };

    entity NonProfits {
        key AppUser : Association to one AppUsers not null;
        Projects    : Composition of many Projects on Projects.Owner = $self;
    };

    entity Certifiers {
        key AppUser : Association to one AppUsers not null;
    };

    entity Projects : standard {
        Owner                   : Association to one NonProfits not null;
        Name                    : localized String;
        Description_Line1       : localized String;
        Description_Line2       : localized String;
        Description_Line3       : localized String;
        Logo                    : Image;
        Banner                  : Image;
        Pictures                : array of Image;
        Country                 : Country;
        Centroid                : Coordinate;
        Boundaries              : Composition of many Boundaries on Boundaries.Project = $self;
        SiteOwnership           : Association to one Ref_Ownership_Types;
        PlantingArea_m2         : Double;
        PlantingDensity_m2      : Double;
        WorkerCount             : Integer;
        Certifier               : Association to one Certifiers;
        Investments             : Association to many Investments on Investments.Project = $self;
        ProgressAudits          : Association to many ReforestationAudits on ProgressAudits.Project = $self;
        ProgressMeasurements    : Association to many ReforestationMeasurements on ProgressMeasurements.Project = $self;
        Followers               : Association to many ProjectFollowers on Followers.Project = $self;
    };

    entity Boundaries {
        key Project : Association to one Projects not null;
        key Index   : Integer not null;
        Coordinate  : Coordinate;
    };

    entity PlantingCosts : temporal {
        key Project      : Association to one Projects not null;
        SowCost          : Decimal(9, 2);
        ConservationCost : Decimal(9, 2);
        Currency         : Currency;
    };

    entity ReforestationAudits @nokey {
        Project     : Association to one Projects not null;
        Species     : Association to one Ref_Tree_Species not null;
        Quantity    : Integer;
        RecordedAt  : Timestamp @cds.on.insert : $now;
    };

    entity ReforestationMeasurements @nokey {
        Project     : Association to one Projects not null;
        Metric      : Association to one Ref_Planting_Metrics not null;
        Value       : Double;
        RecordedAt  : Timestamp @cds.on.insert : $now; 
    };

    entity ProjectFollowers {
        key Project : Association to one Projects;
        key AppUser : Association to one AppUsers;
    };

    entity ProjectPictures {
        key Project : Association to one Projects;
        Picture : Image;
    };

    entity Ref_Ownership_Types : cuid {
        Description : localized String;
    };

    entity Ref_Planting_Metrics : cuid {
        Description : localized String;
        Symbol : String(10);
    };

    entity Ref_Tree_Species : cuid {
        BinomialNomenclature            : String;
        CommonName                      : localized String;
        OffsetAverage_tco2e_year_tree  : Double;
    };

    entity Transactions : cuid {
        Asset       : String @assert.range enum { pland; ccredit } not null;
        Amount      : Double not null default 0;
        Sender      : Association to one AppUsers;
        Recipient   : Association to one AppUsers;
        CreatedAt   : Timestamp @cds.on.insert : $now;
    };

    entity Investments {
        key Transaction : Association to one Transactions;
        Project         : Association to one Projects;
        UnitCost        : Decimal(9, 2);
        Fees            : Decimal(9, 2);
        Currency        : Currency;
    };

    entity Addresses : standard {
        Line1       : String;
        Line2       : String;
        Line3       : String;
        Line4       : String;
        Locality    : String;
        Region      : String;
        PostalCode  : String;
        Country     : Country;
    };

}

@cds.persistence.exists
@cds.persistence.calcview
Entity ![CV_INVESTORS] {
    key     ![APPUSER_ID]: String(36)  @title: 'APPUSER_ID: ID' ; 
    key     ![BLOCKSPURCHASED]: Double  @title: 'BLOCKSPURCHASED: Blocks Owned' ; 
    key     ![TOTALGROSS]: Decimal(9, 2)  @title: 'TOTALGROSS: Total Gross Invested' ; 
    key     ![TOTALNET]: Decimal(9, 2)  @title: 'TOTALNET: Total Net Invested' ; 
}

@cds.persistence.exists
@cds.persistence.calcview
Entity ![CV_NONPROFITS] {
    key     ![APPUSER_ID]: String(36)  @title: 'APPUSER_ID: ID' ; 
    key     ![FOLLOWERCOUNT]: Integer64  @title: 'FOLLOWERCOUNT: Total Follower Count' ; 
    key     ![INVESTORCOUNT]: Integer64  @title: 'INVESTORCOUNT: Total Investor Count' ; 
    key     ![TOTALTREESPLANTED]: Integer  @title: 'TOTALTREESPLANTED: Total Trees Planted' ; 
    key     ![TOTALOFFSETEXPECTED_TCO2E]: Double  @title: 'TOTALOFFSETEXPECTED_TCO2E: Total Expected Carbon Offset until present (tCO2e)' ; 
    key     ![SOWCOSTAVERAGE]: Decimal(9, 2)  @title: 'SOWCOSTAVERAGE: Average Sow Cost' ; 
    key     ![CONSERVATIONCOST]: Decimal(9, 2)  @title: 'CONSERVATIONCOST: Average Conservation Cost' ; 
    key     ![TOTALGROSS]: Decimal(9, 2)  @title: 'TOTALGROSS: Total Gross Investments' ; 
    key     ![TOTALNET]: Decimal(9, 2)  @title: 'TOTALNET: Total Net Investments' ; 
}

@cds.persistence.exists
@cds.persistence.calcview
Entity ![CV_PROJECTS] {
    key     ![ID]: String(36)  @title: 'ID: ID' ; 
    key     ![OWNER_APPUSER_ID]: String(36)  @title: 'OWNER_APPUSER_ID: Non-Profit ID' ; 
    key     ![CENTROID_LATITUDE]: Double  @title: 'CENTROID_LATITUDE: Centroid Latitude' ; 
    key     ![CENTROID_LONGITUDE]: Double  @title: 'CENTROID_LONGITUDE: Centroid Longitude' ; 
    key     ![WORKERCOUNT]: Integer  @title: 'WORKERCOUNT: Worker Count' ; 
    key     ![CERTIFIER_APPUSER_ID]: String(36)  @title: 'CERTIFIER_APPUSER_ID: Certifier ID' ; 
    key     ![FOLLOWER_ID]: String(36)  @title: 'FOLLOWER_ID: Follower ID' ; 
    key     ![INVESTOR_ID]: String(36)  @title: 'INVESTOR_ID: Investor ID' ; 
    key     ![PLANTINGAREA_M2]: Double  @title: 'PLANTINGAREA_M2: Planting Area (m2)' ; 
    key     ![PLANTINGDENSITY_M2]: Double  @title: 'PLANTINGDENSITY_M2: Planting Density (m2)' ; 
    key     ![SOWCOST]: Decimal(9, 2)  @title: 'SOWCOST: Sow Cost per tree' ; 
    key     ![CONSERVATIONCOST]: Decimal(9, 2)  @title: 'CONSERVATIONCOST: Conservation Cost per tree' ; 
    key     ![BLOCKAREA_M2]: Double  @title: 'BLOCKAREA_M2: Block Area (m2)' ; 
    key     ![TOTALBLOCKCAPACITY]: Integer  @title: 'TOTALBLOCKCAPACITY: Total Block Capacity' ; 
    key     ![BLOCKPLANTINGCAPACITY]: Double  @title: 'BLOCKPLANTINGCAPACITY: Block Planting Capacity' ; 
    key     ![TOTALPLANTINGCAPACITY]: Integer  @title: 'TOTALPLANTINGCAPACITY: Total Planting Capacity' ; 
    key     ![BLOCKOFFSETAVERAGE_TCO2E_YEAR]: Double  @title: 'BLOCKOFFSETAVERAGE_TCO2E_YEAR: Average Yearly Carbon Offset per block' ; 
    key     ![BLOCKINITIALCOST]: Decimal(9, 2)  @title: 'BLOCKINITIALCOST: Block Initial Cost' ; 
    key     ![BLOCKUPKEEPCOST]: Decimal(9, 2)  @title: 'BLOCKUPKEEPCOST: Block Upkeep Cost' ; 
    key     ![CREATEDAT]: Timestamp  @title: 'CREATEDAT: Created At Timestamp' ; 
    key     ![OFFSETAVERAGE_TCO2E_YEAR_TREE]: Double  @title: 'OFFSETAVERAGE_TCO2E_YEAR_TREE: Average Carbon Offset per year per tree (tCO2e)' ; 
    key     ![TOTALTREESPLANTED]: Integer  @title: 'TOTALTREESPLANTED: Total Trees Planted' ; 
    key     ![TOTALOFFSETEXPECTED_TCO2E]: Double  @title: 'TOTALOFFSETEXPECTED_TCO2E: Total Expected Carbon Offset until present (tCO2e)' ; 
    key     ![TOTALBLOCKSPURCHASED]: Double  @title: 'TOTALBLOCKSPURCHASED: Total Blocks Purchased' ; 
    key     ![TOTALGROSS]: Decimal(9, 2)  @title: 'TOTALGROSS: Total Gross Investments' ; 
    key     ![TOTALNET]: Decimal(9, 2)  @title: 'TOTALNET: Total Net Investments' ; 
    key     ![FOLLOWERCOUNT]: Integer64  @title: 'FOLLOWERCOUNT: Follower Count' ; 
    key     ![INVESTORCOUNT]: Integer64  @title: 'INVESTORCOUNT: Investor Count' ; 
}