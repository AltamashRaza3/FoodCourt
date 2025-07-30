import React from "react";
import RestrauntCard from "../components/RestrauntCard";

const MockData = () => {
  const resObj = [
  {
 card: {
   restaurants: [
    {
    info: {
      id: "985567",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/6/93554071-8e74-4d54-ad5d-64d5872569c0_985567.jpg",
      locality: "Jawaharlal Nehru Road",
      areaName: "Park Street",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Tibetan", "Desserts"],
      avgRating: 4.5,
      parentId: "434792",
      avgRatingString: "4.5",
      totalRatingsString: "330",
      promoted: true,
      adTrackingId:
        "cid=31469077~p=0~adgrpid=31469077#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=985567~plpr=COLLECTION~eid=7dc835df-ba0d-4370-9c02-5e5499a8ed50~srvts=1753724955681~collid=83639",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-29 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      orderabilityCommunication: {},
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "31469077",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=985567&source=collection&query=Biryani",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "10731",
      name: "Arsalan",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/42006cf0-7d7e-4b50-946b-c14f55fbeabe_10731.jpg",
      locality: "Park Street",
      areaName: "Park Circus",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Mughlai", "Indian", "Kebabs", "Tandoor", "Awadhi"],
      avgRating: 4.5,
      parentId: "1255",
      avgRatingString: "4.5",
      totalRatingsString: "106K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      orderabilityCommunication: {},
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "39K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=10731&source=collection&query=Biryani",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "324206",
      name: "The Good Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/9c8483e2-5564-4e1b-a4af-17f5f8f7a9d7_324206.jpg",
      locality: "DR SURESH CHANDRA BANERJEE ROAD",
      areaName: "Beleghata",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
      avgRating: 4.5,
      parentId: "7918",
      avgRatingString: "4.5",
      totalRatingsString: "2.3K+",
      promoted: true,
      adTrackingId:
        "cid=31360365~p=8~adgrpid=31360365#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=324206~plpr=COLLECTION~eid=5d7a779a-4038-4455-968d-506286ed6816~srvts=1753724955681~collid=83639",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      orderabilityCommunication: {},
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "31360365",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=324206&source=collection&query=Biryani",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "84715",
      name: "Ashraf Biryani Centre",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/8/15/a733b8df-ba65-4a11-ad1b-80b23f961505_3aacb9cc-e950-4ae5-a25d-0d51e4180684.JPG",
      locality: "Salt Lake",
      areaName: "Topsia",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian"],
      avgRating: 4.4,
      parentId: "37051",
      avgRatingString: "4.4",
      totalRatingsString: "883",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-29 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {},
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "1.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=84715&source=collection&query=Biryani",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "324201",
      name: "Behrouz Biryani",
      cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
      locality: "DR SURESH CHANDRA BANERJEE ROAD",
      areaName: "Beleghata",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "North Indian", "Kebabs", "Mughlai", "Beverages", "Desserts"],
      avgRating: 4.5,
      parentId: "1803",
      avgRatingString: "4.5",
      totalRatingsString: "3.0K+",
      promoted: true,
      adTrackingId:
        "cid=31360380~p=11~adgrpid=31360380#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=324201~plpr=COLLECTION~eid=7b9afbea-9a4c-4340-bb39-e85fe432ef66~srvts=1753724955682~collid=83639",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      orderabilityCommunication: {},
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "31360380",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=324201&source=collection&query=Biryani",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "787123",
      name: "New Zam Zam Biryani",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2025/6/14/dec6a830-b7ee-4bc4-ba50-5704cfc0c3b8_ebaa74c7-edde-4349-9a0a-7e113130dc7b.JPG",
      locality: "Topsia Road",
      areaName: "Esplanade",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani"],
      avgRating: 4.3,
      parentId: "349653",
      avgRatingString: "4.3",
      totalRatingsString: "2.0K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹9",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      orderabilityCommunication: {},
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=787123&source=collection&query=Biryani",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "324207",
      name: "The Biryani Life",
      cloudinaryImageId: "rkp6afsmtq1xprdkkjdo",
      locality: "DR SURESH CHANDRA BANERJEE ROAD",
      areaName: "Beleghata",
      costForTwo: "₹250 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "8496",
      avgRatingString: "4.3",
      totalRatingsString: "586",
      promoted: true,
      adTrackingId:
        "cid=31360368~p=15~adgrpid=31360368#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=324207~plpr=COLLECTION~eid=c3704fc0-3507-4cef-ae74-26ebd6229130~srvts=1753724955682~collid=83639",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      orderabilityCommunication: {},
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "31360368",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=324207&source=collection&query=Biryani",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    info: {
      id: "234875",
      name: "Adil Hotel",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "Rautha Wada",
      areaName: "Chhindwara Locality",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Biryani", "Tandoor"],
      avgRating: 4.3,
      parentId: "27123",
      avgRatingString: "4.3",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 11.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "11.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-13 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference:
        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
     },
        analytics: {
          context:
            "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd",
        },
        cta: {
          link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "151515",
          name: "Gupta Bhojnalay",
          cloudinaryImageId: "jo9pdipf4elcuch8g55q",
          locality: "fulwara chowk",
          areaName: "Chhindwara Locality",
          costForTwo: "₹200 for two",
          cuisines: ["Fast Food", "Indian", "Beverages"],
          avgRating: 4.8,
          veg: true,
          parentId: "91635",
          avgRatingString: "4.8",
          totalRatingsString: "449",
          sla: {
            deliveryTime: 41,
            lastMileTravel: 11,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "11.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-12 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId:
                        "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹999",
            discountTag: "FLAT DEAL",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference:
            "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
          context:
            "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd2",
        },
        cta: {
          link: "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "151648",
          name: "Mr. Gurung Momo & Chinese Corner",
          cloudinaryImageId: "h7oibtpm7kqks8cqz3gh",
          locality: "Teacher's Colony",
          areaName: "Mohan Nagar",
          costForTwo: "₹150 for two",
          cuisines: ["Momos", "Chinese", "Fast Food"],
          avgRating: 4.3,
          veg: true,
          parentId: "140255",
          avgRatingString: "4.3",
          totalRatingsString: "1.1K+",
          sla: {
            deliveryTime: 42,
            lastMileTravel: 12.2,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "12.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-12 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId:
                        "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹49",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference:
            "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
          context:
            "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd3",
        },
        cta: {
          link: "https://www.swiggy.com/city/chhindwara/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-rest151648",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "184424",
          name: "Sab Ghar Tak Foods",
          cloudinaryImageId: "ryzswg44bt7thqzkuaj4",
          locality: "Sanchar Colony",
          areaName: "Parsia Road",
          costForTwo: "₹200 for two",
          cuisines: [
            "North Indian",
            "South Indian",
            "Chinese",
            "Beverages",
            "Fast Food",
            "Desserts",
          ],
          avgRating: 4.1,
          parentId: "173932",
          avgRatingString: "4.1",
          totalRatingsString: "617",
          sla: {
            deliveryTime: 46,
            lastMileTravel: 14.1,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "14.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-12 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹50 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference:
            "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
          context:
            "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd4",
        },
        cta: {
          link: "https://www.swiggy.com/city/chhindwara/sab-ghar-tak-foods-sanchar-colony-parsia-road-rest184424",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "658210",
          name: "The Fusion Lounge",
          cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
          locality: "Triloki nagar",
          areaName: "Railway Station",
          costForTwo: "₹300 for two",
          cuisines: [
            "South Indian",
            "Chinese",
            "Beverages",
            "Fast Food",
            "Desserts",
          ],
          avgRating: 4.2,
          parentId: "395453",
          avgRatingString: "4.2",
          totalRatingsString: "350",
          sla: {
            deliveryTime: 45,
            lastMileTravel: 10.4,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "10.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-12 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference:
            "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
          context:
            "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd5",
        },
        cta: {
          link: "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "150591",
          name: "Satkar Restaurant",
          cloudinaryImageId: "rvxp5xbniat84r6efku2",
          locality: "Sinchai Colony",
          areaName: "Satkar Chowk",
          costForTwo: "₹250 for two",
          cuisines: [
            "North Indian",
            "South Indian",
            "Indian",
            "Salads",
            "Desserts",
          ],
          avgRating: 4.4,
          veg: true,
          parentId: "21553",
          avgRatingString: "4.4",
          totalRatingsString: "2.9K+",
          sla: {
            deliveryTime: 44,
            lastMileTravel: 13.4,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "13.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-12 22:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId:
                  "Rxawards/_CATEGORY-North%20Indian.png",
                description: "Delivery!",
              },
              {
                imageId:
                  "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId:
                        "Rxawards/_CATEGORY-North%20Indian.png",
                    },
                  },
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId:
                        "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
                    },
                  },
                ],
              },
              textBased: {},
              textExtendedBadges: {},
            },
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference:
            "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
          context:
            "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd6",
        },
        cta: {
          link: "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "385824",
          name: "The Belgian Waffle Co.",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
          locality: "Sinchai Colony",
          areaName: "Mohan Nagar",
          costForTwo: "₹200 for two",
          cuisines: [
            "Waffle",
            "Desserts",
            "Ice Cream",
            "Beverages",
          ],
          avgRating: 4.7,
          veg: true,
          parentId: "2233",
          avgRatingString: "4.7",
          totalRatingsString: "312",
          sla: {
            deliveryTime: 50,
            lastMileTravel: 13.4,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "13.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-12 22:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId:
                        "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textBased: {},
              textExtendedBadges: {},
            },
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference:
            "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
          context:
            "seo-data-4e327c63-b967-4e28-bcdb-8f1d38fa05cd7",
        },
        cta: {
          link: "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
          type: "WEBLINK",
        },
      },
    ],
  },
},
     
  ];

  // const restaurants = resObj.filter(
  //   (card) =>
  //     card?.card?.card?.["@type"] ===
  //     "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  // );
 const restaurants = resObj[0]?.card?.restaurants || [];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 mt-6 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {restaurants.map((res, i) => {
        const info = res.info;
       const imageUrl = info.cloudinaryImageId
         ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/${info.cloudinaryImageId}`
         : "https://via.placeholder.com/300x200?text=No+Image";


        return (
          <RestrauntCard
            key={info.id || i}
            resName={info.name}
            cuisine={info.cuisines?.join(", ")}
            imageUrl={imageUrl}
            rating={info.avgRating}
            time={`${info.sla?.deliveryTime || "--"} mins`}
            locality={info.locality}
            areaName={info.areaName}
            costForTwo={info.costForTwo}
          />
        );
      })}
    </div>
  );
};

export default MockData;
