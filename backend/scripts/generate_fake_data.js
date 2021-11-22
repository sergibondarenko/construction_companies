/* global __dirname */
const path = require('path');
const fs = require('fs');
const faker = require('faker');

const pathToData = path.resolve(__dirname, '../data/data.json');
const specialities = ['excavation', 'plumbing', 'electrical'];

const imageUrls = [
  'https://images.creativetemplate.net/wp-content/uploads/2018/03/Latest-Construction-Company-Flyer-Design.jpg',
  'https://straitspartners.co/wp-content/uploads/2019/03/18-Opening-a-Construction-Company.jpg',
  'https://www.eeresources.biz/wp-content/uploads/2021/04/construction-company.jpeg',
  'http://st2.depositphotos.com/1011643/5817/i/450/depositphotos_58173265-Company-workers-in-substation.jpg',
  'https://www.romania-company.com/files/large/4f2afbf44455dc0e57e31d02f30fb89e.png',
  'http://galbern.com/wp-content/uploads/2018/11/construction-engineering-1.jpg',
  'https://www.chinadaily.com.cn/business/img/attachement/jpg/site1/20160722/b083fe955aa118fba45714.jpg',
  'https://www.euro-resource.co.uk/wp-content/uploads/2019/04/Crane-1.jpg',
  'https://newfinishremodeling.com/wp-content/uploads/2021/09/Construction-Company.jpg',
  'https://d3cl79h6n1fe0x.cloudfront.net/wp-content/uploads/2018/07/12101357/AdobeStock_89360463.jpeg',
  'https://www.chinadaily.com.cn/business/img/attachement/jpg/site1/20170912/b083fe955aa11b21576303.jpg',
  'https://airtightconstruction.com/wp-content/uploads/2021/06/5-Reasons-to-Hire-a-Local-Bay-Area-Construction-Company.jpg',
  'https://d3qw18ectmnvvf.cloudfront.net/assets/images/blog-images/6-reasons-why-construction-industry-need-erp-solution-1.png',
  'https://www.turnerconstruction.com/Files/GetSharepointImage?url=%2FRichTextImages%2FPittsburgh%2F2019_CSC%2520Denmarsh%2520(11%2520of%252014).jpg',
  'https://www.financenewsaustralia.com/wp-content/uploads/2017/06/Running-A-Construction-Business.jpg',
  'https://www.badgebox.com/landing/images/img_story_building.jpg',
  'https://digitalmarketingdeal.com/blog/wp-content/uploads/2021/03/Construction-companies-in-Californias-1.jpg',
  'https://erpnews.com/v2/wp-content/uploads/2021/07/construction-engineers-discussion-with-architects-7NQ9PJZ.jpg',
  'https://businessfirstfamily.com/wp-content/uploads/2021/09/hidden-costs-running-construction-business.png',
  'https://itiebicompany.com/wp-content/uploads/2021/02/road-construction.jpg',
  'https://arcoconstruction.com/wp-content/uploads/2020/08/arco-construction-team.jpg',
  'https://www.wpdcpa.com/wp-content/uploads/2020/11/Construction-companies-Section-179-scaled-e1604346272491.jpg',
  'https://www.kypbuilders.com/images/articles/welcome.jpg',
  'https://st4.depositphotos.com/6478056/25749/i/600/depositphotos_257490606-stock-photo-real-estate-investment-purchase-agreement.jpg',
  'https://image.shutterstock.com/image-photo/skeleton-steel-house-building-construction-600w-1294531273.jpg',
  'https://www.euro-resource.co.uk/wp-content/uploads/2019/04/quantitysurveyor-e1478014272758.jpg',
  'https://cdn.confessionsoftheprofessions.com/media/2018/08/4p4sj-construction-companies.jpg',
  'https://www.zaragoza2012.es/wp-content/uploads/2021/05/Direccion-de-Obra-bcn-1.jpg',
  'https://www.insidermedia.com/uploads/news/images/ikon_construction.jpg',
  'https://robertsoncs.com/wp-content/uploads/2020/01/shutterstock_640018039-600x400.jpg',
  'https://st4.depositphotos.com/19424380/22000/i/450/depositphotos_220004466-stock-photo-two-successful-representatives-construction-company.jpg',
  'https://gather-content-assets.s3.eu-west-2.amazonaws.com/misc/_600xAUTO_crop_center-center_none/Case-Study-Construction-Anonymous.jpg',
  'https://www.integrityrestorationtx.com/wp-content/uploads/2020/08/4.jpg',
  'https://tgcconstructioncompany.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-21619405/images/5b75d52ebd8e72ooRgfs/20_free_blueprint_construction_photoshop_brushes_68197931.jpg',
  'https://indoservice.co.id/wp-content/uploads/2021/04/How-to-set-up-a-construction-service-company.jpg',
  'https://westmidconnected.co.uk/wp-content/uploads/2019/11/Just-Solutions.jpg',
  'https://mici.com/wp-content/uploads/2016/06/June_1_builders-cm.jpg',
  'https://i2.wp.com/i.pinimg.com/736x/4f/5c/cd/4f5ccd12903be903398e824f24084853.jpg',
  'https://www.insideconstruction.com.au/wp-content/uploads/2021/02/ADCOConstruction.jpg'
];

const res = [];

for (let i = 0; i < 30; i++) {
  const speciality = specialities[Math.floor(Math.random() * specialities.length)];
  const logo = imageUrls[Math.floor(Math.random() * imageUrls.length)]; 
  const name = faker.company.companyName();
  const city = faker.address.city();

  res.push({
    name, speciality, city, logo
  });
}

fs.writeFileSync(pathToData, JSON.stringify(res, null, 2));
