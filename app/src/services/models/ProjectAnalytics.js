
import {prefixNum} from "@/helpers";

export class ProjectAnalytics {
  constructor(data = {}) {
    this.id = data.ID;
    this.owner = data.OWNER_APPUSER_ID;
    this.latitude = data.CENTROID_LATITUDE || 0;
    this.longitude = data.CENTROID_LONGITUDE || 0;
    this.workerCount = data.WORKERCOUNT || 0;
    this.certifierUserId = data.CERTIFIER_APPUSER_ID;
    this.followerId = data.FOLLOWER_ID;
    this.investorId = data.INVESTOR_ID;
    this.plantingArea = data.PLANTINGAREA_M2 || 0;
    this.plantingDensityM2 = data.PLANTINGDENSITY_M2 || 0;
    this.sowCost =  data.SOWCOST? data.SOWCOST : 0;
    this.conservationCost = data.CONSERVATIONCOST || 0;
    this.blockAreaM2 = data.BLOCKAREA_M2 || 0;
    this.totalBlockCapacity = data.TOTALBLOCKCAPACITY || 0;
    this.blockPlantingCapacity = data.BLOCKPLANTINGCAPACITY || 0;
    this.totalPlantingCapacity = data.TOTALPLANTINGCAPACITY || 0;
    this.blockOffsetAverage = data.BLOCKOFFSETAVERAGE_TCO2E_YEAR || 0;
    this.blockInitialCost = data.BLOCKINITIALCOST || 0;
    this.blockupKeepCost = data.BLOCKUPKEEPCOST || 0;
    this.createDate = data.CREATEDAT;
    this.offsetAverageTCo2 = data.OFFSETAVERAGE_TCO2E_YEAR_TREE? data.OFFSETAVERAGE_TCO2E_YEAR_TREE : 0;
    this.totalTreesPlanted = data.TOTALTREESPLANTED || 0;
    this.totalOffsetExpectedTCo2 = data.TOTALOFFSETEXPECTED_TCO2E || 0;
    this.totalBlocksPurchased = data.TOTALBLOCKSPURCHASED || 0;
    this.totalGross = data.TOTALGROSS || 0;
    this.totalNet = data.TOTALNET || 0;
    this.followerCount = data.FOLLOWERCOUNT || 0;
    this.investorCount = data.INVESTORCOUNT || 0;
    this.co2AverageCost = (this.offsetAverageTCo2&&this.sowCost) ?((1 / this.offsetAverageTCo2) * this.sowCost) : 0;
  }
}
