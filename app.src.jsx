// ---- React hooks from the global UMD build (no ES imports in the browser) ----
const { useState, useEffect, useRef, useMemo } = React;

// ---- Inline icon set (replaces lucide-react so there's no external icon dependency) ----
// Each is a small SVG that accepts size/className/strokeWidth-ish props like lucide did.
function __mkIcon(paths) {
  return function (props) {
    props = props || {};
    const size = props.size || 20;
    return React.createElement("svg", {
      width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      stroke: "currentColor", strokeWidth: props.strokeWidth || 2,
      strokeLinecap: "round", strokeLinejoin: "round",
      className: props.className || "", style: props.style || null,
    }, paths.map((d, i) => React.createElement("path", { key: i, d: d })));
  };
}
// minimal but recognizable glyphs
const Sparkles = __mkIcon(["M12 3l1.9 4.8L18 9.5l-4.1 1.7L12 16l-1.9-4.8L6 9.5l4.1-1.7z"]);
const Briefcase = __mkIcon(["M3 7h18v13H3z","M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"]);
const Users = __mkIcon(["M16 18v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2","M9 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6","M22 18v-2a4 4 0 0 0-3-3.8"]);
const User = __mkIcon(["M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2","M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8"]);
const ClipboardList = __mkIcon(["M9 3h6v3H9z","M5 6h14v15H5z","M9 11h6","M9 15h6"]);
const Camera = __mkIcon(["M23 19V8h-4l-2-3H9L7 8H3v11z","M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8"]);
const ChevronLeft = __mkIcon(["M15 18l-6-6 6-6"]);
const RefreshCw = __mkIcon(["M21 12a9 9 0 1 1-3-6.7L21 8","M21 3v5h-5"]);
const MessageCircle = __mkIcon(["M21 11.5a8.5 8.5 0 0 1-12 7.7L3 21l1.8-6A8.5 8.5 0 1 1 21 11.5z"]);
const Star = __mkIcon(["M12 3l2.9 6 6.6 .9-4.8 4.6 1.2 6.5L12 18.5 6.1 21l1.2-6.5L2.5 9.9 9 9z"]);
const Send = __mkIcon(["M22 2L11 13","M22 2l-7 20-4-9-9-4z"]);
const X = __mkIcon(["M18 6L6 18","M6 6l12 12"]);
const Check = __mkIcon(["M20 6L9 17l-5-5"]);
const PartyPopper = __mkIcon(["M5 19l5-13 8 8z","M14 6l1-2","M18 10l2-1","M16 14l2 1"]);
const ArrowLeftRight = __mkIcon(["M8 3L4 7l4 4","M4 7h16","M16 21l4-4-4-4","M20 17H4"]);
const Share = __mkIcon(["M4 12v8h16v-8","M16 6l-4-4-4 4","M12 2v14"]);
const MessageSquare = __mkIcon(["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"]);
const Trash2 = __mkIcon(["M3 6h18","M8 6V4h8v2","M19 6l-1 14H6L5 6","M10 11v6","M14 11v6"]);
const Pencil = __mkIcon(["M12 20h9","M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"]);
const ListChecks = __mkIcon(["M11 6h10","M11 12h10","M11 18h10","M3 6l1.5 1.5L7 5","M3 18l1.5 1.5L7 17"]);
const AlertTriangle = __mkIcon(["M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z","M12 9v4","M12 17h.01"]);
const Bell = __mkIcon(["M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9","M13.7 21a2 2 0 0 1-3.4 0"]);
const Calculator = __mkIcon(["M4 2h16v20H4z","M8 6h8","M8 10h2","M12 10h2","M16 10h0","M8 14h2","M12 14h2","M16 14h2","M8 18h6"]);
const Plus = __mkIcon(["M12 5v14","M5 12h14"]);


/* ============================================================
   CAZBID MARKETPLACE v3
   Same data as v2 (keys unchanged - existing profiles/jobs/chats
   survive). New: iOS-style bottom tab nav, SaaS dashboard styling,
   reviews-about-you, autosaved drafts, celebration confetti,
   large photo dropzones.
   ============================================================ */

const JOB_INDEX = "cazbid-job-index-v2";
const JOB_KEY = (id) => "cazbid-job2-" + id;
const USER_INDEX = "cazbid-user-index-v2";
const USER_KEY = (uid) => "cazbid-user2-" + uid;
const CHAT_KEY = (jobId) => "cazbid-chat2-" + jobId;
const POST_KEY = (uid, pid) => "cazbid-post2-" + uid + "-" + pid;
const ME_KEY = "cazbid-me-v2";
const ARCHIVE_KEY = "cazbid-archive-v2";
const SEED_KEY = "cazbid-seed-v2";
const PRICELIB_KEY = "cazbid-pricelib-v1";
const COSTCACHE_KEY = "cazbid-costcache-v1";
const MATCOST_KEY = "cazbid-matcosts-v1";
const PRICEBOOK_KEY = "cazbid-pricebook-v1";
const RATEBOOK_KEY = "cazbid-ratebook-v1";
const SEED_PRICES = [
  { id: "pb_acm_aluminum_roll_valley_flashing", cat: "Sloped roof", name: "ACM Aluminum Roll Valley Flashing", unit: "roll", price: 56.5 },
  { id: "pb_american_flash_kickout_with_j_chan", cat: "Sloped roof", name: "American Flash Kickout with J-Channel", unit: "ea", price: 16.0 },
  { id: "pb_atlas_roofing_pinnacle_pristine_ar", cat: "Sloped roof", name: "Atlas Roofing Pinnacle Pristine Architectural Shingles", unit: "sq", price: 127.99 },
  { id: "pb_atlas_roofing_pro_cut_hp42_starter", cat: "Sloped roof", name: "Atlas Roofing Pro-Cut HP42 Starter Shingles", unit: "bndl", price: 77.2 },
  { id: "pb_caliber_metals_rake_edge", cat: "Sloped roof", name: "Caliber Metals Rake Edge", unit: "LF", price: 2.4 },
  { id: "pb_certainteed_cedar_crest_hip_ridge_", cat: "Sloped roof", name: "CertainTeed Cedar Crest Hip & Ridge Shingles", unit: "LF", price: 4.53 },
  { id: "pb_certainteed_grand_manor_architectu", cat: "Sloped roof", name: "CertainTeed Grand Manor Architectural Shingles", unit: "sq", price: 319.95 },
  { id: "pb_certainteed_landmark_pro_architect", cat: "Sloped roof", name: "CertainTeed Landmark Pro Architectural Shingles", unit: "sq", price: 147.75 },
  { id: "pb_certainteed_roofrunner_synthetic_u", cat: "Sloped roof", name: "CertainTeed RoofRunner Synthetic Underlayment", unit: "sq", price: 13.88 },
  { id: "pb_certainteed_swiftstart_starter_shi", cat: "Sloped roof", name: "CertainTeed Swiftstart Starter Shingles", unit: "bndl", price: 78.3 },
  { id: "pb_gaf_master_flow_erv5ht_power_attic", cat: "Sloped roof", name: "GAF Master Flow ERV5HT Power Attic Vent", unit: "pc", price: 242.5 },
  { id: "pb_gaf_master_flow_erv6_power_attic_v", cat: "Sloped roof", name: "GAF Master Flow ERV6 Power Attic Vent", unit: "ea", price: 214.0 },
  { id: "pb_gaf_master_flow_ir_65_slant_back_v", cat: "Sloped roof", name: "GAF Master Flow IR-65 Slant Back Vent", unit: "ea", price: 18.99 },
  { id: "pb_generic_staples", cat: "Sloped roof", name: "Generic Staples", unit: "box", price: 11.99 },
  { id: "pb_geocel_2300_construction_tripolyme", cat: "Sloped roof", name: "Geocel 2300 Construction Tripolymer Sealant", unit: "ea", price: 10.33 },
  { id: "pb_griprite_ht_ice_and_water_shield_2", cat: "Sloped roof", name: "GripRite HT Ice and Water Shield 2sq Roll", unit: "roll", price: 129.47 },
  { id: "pb_ips_aluminum_multi_size_4n1_pipe_f", cat: "Sloped roof", name: "IPS Aluminum Multi-Size 4N1 Pipe Flashing", unit: "ea", price: 14.0 },
  { id: "pb_lifetime_tool_pipe_flashing_200_ul", cat: "Sloped roof", name: "Lifetime Tool Pipe Flashing 200 Ultimate", unit: "pc", price: 51.6 },
  { id: "pb_lifetime_tool_pipe_flashing_300_ul", cat: "Sloped roof", name: "Lifetime Tool Pipe Flashing 300 Ultimate", unit: "pc", price: 59.35 },
  { id: "pb_lifetime_tool_pipe_flashing_400_ul", cat: "Sloped roof", name: "Lifetime Tool Pipe Flashing 400 Ultimate", unit: "pc", price: 59.35 },
  { id: "pb_lifetime_tool_pipe_flashing_easysl_2", cat: "Sloped roof", name: "Lifetime Tool Pipe Flashing EasySleeve ES 300", unit: "pc", price: 29.85 },
  { id: "pb_lifetime_tool_pipe_flashing_easysl", cat: "Sloped roof", name: "Lifetime Tool Pipe Flashing EasySleeve ES200", unit: "pc", price: 25.2 },
  { id: "pb_lifetime_tool_pipe_flashing_easysl_3", cat: "Sloped roof", name: "Lifetime Tool Pipe Flashing EasySleeve ES400", unit: "pc", price: 34.65 },
  { id: "pb_lomanco_bath_pro_brv34", cat: "Sloped roof", name: "Lomanco Bath PRO BRV34", unit: "ea", price: 43.5 },
  { id: "pb_lomanco_lor30_lo_omniroll_ridge_ve", cat: "Sloped roof", name: "Lomanco LOR30 Lo-OmniRoll Ridge Vent", unit: "LF", price: 4.1 },
  { id: "pb_marco_roof_boot_electrical_service", cat: "Sloped roof", name: "Marco Roof Boot Electrical Service Mast Flashing", unit: "ea", price: 64.05 },
  { id: "pb_national_nail_coil_nails", cat: "Sloped roof", name: "National Nail Coil Nails", unit: "box", price: 83.99 },
  { id: "pb_national_nail_pro_fit_electro_galv", cat: "Sloped roof", name: "National Nail Pro-Fit Electro Galvanized Roofing Nails Ring Shank", unit: "box", price: 68.5 },
  { id: "pb_omg_masonry_fasteners", cat: "Sloped roof", name: "OMG Masonry Fasteners", unit: "box", price: 33.89 },
  { id: "pb_osi_quad_max_window_door_siding_se", cat: "Sloped roof", name: "OSI Quad Max Window, Door & Siding Sealant", unit: "tube", price: 10.59 },
  { id: "pb_owens_corning_proarmor_synthetic_u", cat: "Sloped roof", name: "Owens Corning ProArmor Synthetic Underlayment", unit: "sq", price: 12.18 },
  { id: "pb_owens_corning_proedge_hip_ridge_sh", cat: "Sloped roof", name: "Owens Corning ProEdge Hip & Ridge Shingles", unit: "LF", price: 2.68 },
  { id: "pb_owens_corning_rhinoroof_granulated", cat: "Sloped roof", name: "Owens Corning RhinoRoof Granulated SA Underlayment", unit: "roll", price: 94.25 },
  { id: "pb_owens_corning_rhinoroof_u20_synthe", cat: "Sloped roof", name: "Owens Corning RhinoRoof U20 Synthetic Underlayment", unit: "sq", price: 7.35 },
  { id: "pb_owens_corning_starter_strip_plus_s", cat: "Sloped roof", name: "Owens Corning Starter Strip Plus Shingle", unit: "sq", price: 51.7 },
  { id: "pb_owens_corning_trudefinition_durati", cat: "Sloped roof", name: "Owens Corning TruDefinition Duration Architectural Shingles", unit: "sq", price: 129.0 },
  { id: "pb_owens_corning_trudefinition_durati_2", cat: "Sloped roof", name: "Owens Corning TruDefinition Duration Designer Architectural Shingles", unit: "sq", price: 135.0 },
  { id: "pb_owens_corning_weatherlock_g_ice_wa", cat: "Sloped roof", name: "Owens Corning WeatherLock G Ice & Water Synthetic Underlayment", unit: "roll", price: 146.25 },
  { id: "pb_owens_corning_weatherlock_mat_self", cat: "Sloped roof", name: "Owens Corning WeatherLock Mat Self-Sealing Waterproofing Barrier", unit: "LF", price: 1.86 },
  { id: "pb_velux_edl_flashing_kit", cat: "Sloped roof", name: "Velux EDL Flashing Kit", unit: "ea", price: 120.0 },
  { id: "pb_velux_edw_c06_0000a_step_flashing", cat: "Sloped roof", name: "Velux Edw-C06-0000A Step Flashing", unit: "ea", price: 227.0 },
  { id: "pb_velux_fs_deck_mounted_skylight", cat: "Sloped roof", name: "Velux FS Deck Mounted Skylight", unit: "ea", price: 604.0 },
  { id: "pb_4_pipe_boot_3_5", cat: "Standing seam", name: "#4 Pipe Boot 3\"-5\"", unit: "ea", price: 14.46 },
  { id: "pb_1_pan_head_screw_250_ct_bag", cat: "Standing seam", name: "1\" Pan Head Screw (250 ct bag)", unit: "bag", price: 11.5 },
  { id: "pb_1_5_standing_seam_clip", cat: "Standing seam", name: "1.5 Standing Seam Clip", unit: "ea", price: 0.47 },
  { id: "pb_24g_kynar_a1500_snap_lock_panel_16", cat: "Standing seam", name: "24G Kynar A1500 Snap Lock Panel 16\" 24ga (1-1/2\" snap lock)", unit: "LF", price: 4.43 },
  { id: "pb_24g_kynar_drip_edge", cat: "Standing seam", name: "24G Kynar Drip Edge", unit: "pc", price: 25.86 },
  { id: "pb_24g_kynar_endwall_side", cat: "Standing seam", name: "24G Kynar Endwall/Side", unit: "pc", price: 23.32 },
  { id: "pb_24g_kynar_headwall", cat: "Standing seam", name: "24G Kynar Headwall", unit: "pc", price: 23.32 },
  { id: "pb_24g_kynar_hip_and_ridge", cat: "Standing seam", name: "24G Kynar Hip and Ridge", unit: "pc", price: 36.71 },
  { id: "pb_24g_kynar_offset_cleat", cat: "Standing seam", name: "24G Kynar Offset Cleat", unit: "pc", price: 11.2 },
  { id: "pb_24g_kynar_transition", cat: "Standing seam", name: "24G Kynar Transition", unit: "pc", price: 32.78 },
  { id: "pb_24g_kynar_valley", cat: "Standing seam", name: "24G Kynar Valley", unit: "pc", price: 41.87 },
  { id: "pb_24g_kynar_z_closure_solid", cat: "Standing seam", name: "24G Kynar Z-Closure Solid", unit: "pc", price: 12.06 },
  { id: "pb_26g_pre_cut_vented_z", cat: "Standing seam", name: "26G Pre Cut Vented Z", unit: "pc", price: 6.87 },
  { id: "pb_butyl_tape_3_4_x_3_32_x_50_roll", cat: "Standing seam", name: "Butyl Tape 3/4\" x 3/32\" x 50' Roll", unit: "roll", price: 8.31 },
  { id: "pb_copper_sheet_2_x_8_16_oz", cat: "Standing seam", name: "Copper Sheet 2' X 8' 16 OZ", unit: "sht", price: 135.4 },
  { id: "pb_copper_sheet_3_x_10_16_oz", cat: "Standing seam", name: "Copper Sheet 3' X 10' 16 OZ", unit: "sht", price: 253.8 },
  { id: "pb_pop_rivets_44_colored_ss_100_ct_ba", cat: "Standing seam", name: "Pop Rivets #44 Colored SS (100 ct bag)", unit: "bag", price: 9.5 },
  { id: "pb_pre_bent_back_flashing_26ga_black_", cat: "Standing seam", name: "Pre Bent Back Flashing 26ga Black 10'", unit: "pc", price: 22.25 },
  { id: "pb_abc_roof_paint", cat: "Flat roof", name: "ABC Roof Paint", unit: "can", price: 6.89 },
  { id: "pb_elevate_045_tpo_membrane", cat: "Flat roof", name: "Elevate 045 TPO Membrane", unit: "roll", price: 833.0 },
  { id: "pb_elevate_060_epdm_max_membrane", cat: "Flat roof", name: "Elevate 060 EPDM Max Membrane", unit: "roll", price: 1433.05 },
  { id: "pb_elevate_060_epdm_membrane", cat: "Flat roof", name: "Elevate 060 EPDM Membrane", unit: "roll", price: 2061.7 },
  { id: "pb_elevate_060_epdm_rubbergard_membra", cat: "Flat roof", name: "Elevate 060 EPDM RubberGard Membrane Self-Adhered", unit: "roll", price: 2068.4 },
  { id: "pb_elevate_1_part_pourable_sealer", cat: "Flat roof", name: "Elevate 1-Part Pourable Sealer", unit: "ea", price: 58.0 },
  { id: "pb_elevate_all_purpose_fasteners", cat: "Flat roof", name: "Elevate All-Purpose Fasteners", unit: "box", price: 299.99 },
  { id: "pb_elevate_batten_bar", cat: "Flat roof", name: "Elevate Batten Bar", unit: "ea", price: 10.0 },
  { id: "pb_elevate_insulation_fastening_plate", cat: "Flat roof", name: "Elevate Insulation Fastening Plate", unit: "box", price: 285.99 },
  { id: "pb_elevate_isogard_hd_roof_board", cat: "Flat roof", name: "Elevate Isogard HD Roof Board", unit: "sht", price: 34.5 },
  { id: "pb_elevate_lap_sealant_hs", cat: "Flat roof", name: "Elevate Lap Sealant HS", unit: "tube", price: 13.5 },
  { id: "pb_elevate_perimeter_fastening_strip_", cat: "Flat roof", name: "Elevate Perimeter Fastening Strip Reinforced", unit: "roll", price: 273.0 },
  { id: "pb_elevate_polyiso_insulation_board_1", cat: "Flat roof", name: "Elevate Polyiso Insulation Board 1\"", unit: "sht", price: 30.0 },
  { id: "pb_elevate_quickprime_plus_lvoc", cat: "Flat roof", name: "Elevate QuickPrime Plus LVOC", unit: "gal", price: 129.0 },
  { id: "pb_elevate_quickscrubber_pad", cat: "Flat roof", name: "Elevate QuickScrubber Pad", unit: "box", price: 43.0 },
  { id: "pb_elevate_quickseam_batten_cover", cat: "Flat roof", name: "Elevate QuickSeam Batten Cover", unit: "roll", price: 431.5 },
  { id: "pb_elevate_quickseam_curb_flashing", cat: "Flat roof", name: "Elevate QuickSeam Curb Flashing", unit: "ea", price: 226.0 },
  { id: "pb_elevate_quickseam_epdm_pipe_flashi", cat: "Flat roof", name: "Elevate QuickSeam EPDM Pipe Flashing", unit: "pc", price: 59.0 },
  { id: "pb_elevate_quickseam_formflash_flashi", cat: "Flat roof", name: "Elevate QuickSeam FormFlash Flashing", unit: "roll", price: 448.5 },
  { id: "pb_elevate_quickseam_penetration_pock", cat: "Flat roof", name: "Elevate QuickSeam Penetration Pocket Kit", unit: "ea", price: 104.5 },
  { id: "pb_elevate_quickseam_self_adhered_fla", cat: "Flat roof", name: "Elevate QuickSeam Self Adhered Flashing", unit: "roll", price: 587.5 },
  { id: "pb_elevate_quickseam_splice_tape", cat: "Flat roof", name: "Elevate QuickSeam Splice Tape", unit: "roll", price: 144.0 },
  { id: "pb_elevate_s_20_water_block_seal", cat: "Flat roof", name: "Elevate S-20 Water-Block Seal", unit: "tube", price: 7.5 },
  { id: "pb_elevate_seam_plate", cat: "Flat roof", name: "Elevate Seam Plate", unit: "box", price: 353.99 },
  { id: "pb_elevate_single_ply_low_voc_bonding", cat: "Flat roof", name: "Elevate Single Ply Low-Voc Bonding Adhesive", unit: "drum", price: 281.5 },
  { id: "pb_elevate_single_ply_lvoc_primer", cat: "Flat roof", name: "Elevate Single-Ply LVOC Primer", unit: "can", price: 142.0 },
  { id: "pb_elevate_standalone_insulation_fast", cat: "Flat roof", name: "Elevate Standalone Insulation Fasteners", unit: "box", price: 248.99 },
  { id: "pb_elevate_termination_bar", cat: "Flat roof", name: "Elevate Termination Bar", unit: "ea", price: 17.5 },
  { id: "pb_elevate_ultraply_tpo_quickseam_fla", cat: "Flat roof", name: "Elevate UltraPly TPO QuickSeam Flashing", unit: "roll", price: 319.5 },
  { id: "pb_johns_manville_separator_cover_boa", cat: "Flat roof", name: "Johns Manville Separator Cover Board", unit: "sht", price: 12.0 },
  { id: "pb_marathon_balum3crp_aluminator_roof", cat: "Flat roof", name: "Marathon BALUM3CRP Aluminator Roof Drain", unit: "ea", price: 190.0 },
  { id: "pb_marathon_balum4crp_aluminator_roof", cat: "Flat roof", name: "Marathon BALUM4CRP Aluminator Roof Drain", unit: "ea", price: 322.5 },
  { id: "pb_marathon_balum6crp_aluminator_roof", cat: "Flat roof", name: "Marathon BALUM6CRP Aluminator Roof Drain", unit: "ea", price: 533.0 },
  { id: "pb_marathon_bff375eco_economy_retrofi", cat: "Flat roof", name: "Marathon BFF375ECO Economy Retrofit Roof Drain", unit: "ea", price: 98.69 },
  { id: "pb_mule_hide_modified_bitumen_base_sh", cat: "Flat roof", name: "Mule-Hide Modified Bitumen Base Sheet Self-Adhered", unit: "sq", price: 82.38 },
  { id: "pb_mule_hide_retrofit_drain", cat: "Flat roof", name: "Mule-Hide Retrofit Drain", unit: "ea", price: 217.0 },
  { id: "pb_mule_hide_sa_sbs_modified_bitumen_", cat: "Flat roof", name: "Mule-Hide SA-SBS Modified Bitumen Cap Sheet", unit: "sq", price: 128.0 },
  { id: "pb_mulehide_aluminator_retrofit_drain", cat: "Flat roof", name: "Mulehide Aluminator Retrofit Drain", unit: "ea", price: 318.5 },
  { id: "pb_mulehide_modified_bitumen_base_she", cat: "Flat roof", name: "Mulehide Modified Bitumen Base Sheet Self-Adhered", unit: "roll", price: 193.5 },
  { id: "pb_omg_hercules_retrodrain", cat: "Flat roof", name: "OMG Hercules RetroDrain", unit: "ea", price: 440.0 },
  { id: "pb_acm_aluminum_smooth_trim_coil", cat: "Exterior", name: "ACM Aluminum Smooth Trim Coil", unit: "roll", price: 132.5 },
  { id: "pb_acm_fascia_ribbed", cat: "Exterior", name: "ACM Fascia Ribbed", unit: "pc", price: 18.5 },
  { id: "pb_mastic_mvj051_j_channel", cat: "Exterior", name: "Mastic MVJ051 J Channel", unit: "ea", price: 7.85 },
  { id: "pb_mastic_vfr05_f_channel", cat: "Exterior", name: "Mastic VFR05 F Channel", unit: "pc", price: 22.25 },
  { id: "pb_norandex_builder_triple_4_x_12_per", cat: "Exterior", name: "Norandex Builder Triple 4\" x 12' Perforated Vinyl Soffit", unit: "sq", price: 110.5 },
  { id: "pb_norandex_builder_triple_4_x_12_sol", cat: "Exterior", name: "Norandex Builder Triple 4\" x 12' Solid Vinyl Soffit", unit: "sq", price: 110.5 },
  { id: "pb_norandex_double_5_x_12_premium_ful", cat: "Exterior", name: "Norandex Double 5\" x 12' Premium Full Vent Vinyl Soffit", unit: "pnl", price: 21.47 },
  { id: "pb_norandex_double_5_x_12_premium_sol", cat: "Exterior", name: "Norandex Double 5\" x 12' Premium Solid Vinyl Soffit", unit: "sq", price: 214.65 },
  { id: "pb_norandex_smooth_trim_coil", cat: "Exterior", name: "Norandex Smooth Trim Coil", unit: "roll", price: 132.5 },
  { id: "pb_2_x_4_x_16_pressure_treated", cat: "Framing & decks", name: "2\" X 4\" X 16' Pressure Treated", unit: "ea", price: 27.85 },
  { id: "pb_cdx_fire_rated_plywood_1_2_4_x_8", cat: "Framing & decks", name: "Cdx Fire Rated Plywood 1/2\" 4' X 8'", unit: "sht", price: 50.0 },
  { id: "pb_cdx_plywood_3_8_4_x_8_3_ply", cat: "Framing & decks", name: "Cdx Plywood 3/8\" 4' X 8' 3-Ply", unit: "sht", price: 23.8 },
  { id: "pb_gp_1_2_4_x_8_cdx_plywood", cat: "Framing & decks", name: "GP 1/2\" 4' X 8' Cdx Plywood", unit: "sht", price: 26.0 },
  { id: "pb_gp_1_2_4_x_8_cdx_plywood_alt_listi", cat: "Framing & decks", name: "GP 1/2\" 4' X 8' Cdx Plywood (alt listing)", unit: "sht", price: 35.75 },
  { id: "pb_generic_osb_sheathing", cat: "Framing & decks", name: "Generic OSB Sheathing", unit: "sht", price: 15.95 },
  { id: "pb_generic_plywood", cat: "Framing & decks", name: "Generic Plywood", unit: "sht", price: 43.95 },
  { id: "pb_generic_plywood_clips", cat: "Framing & decks", name: "Generic Plywood Clips", unit: "ea", price: 25.0 },
  { id: "pb_onsite_roll_off_dumpster", cat: "Other", name: "Onsite Roll Off (dumpster)", unit: "ea", price: 375.0 },
];
const SEED_RATES = [
  { id: "r_tearoff_shingle", cat: "Roofing — steep slope", task: "Tear-off — shingles (per layer)", unit: "sq", rate: 1.0 },
  { id: "r_shingle", cat: "Roofing — steep slope", task: "Shingle install (architectural, walkable)", unit: "sq", rate: 2.0 },
  { id: "r_steep_adder", cat: "Roofing — steep slope", task: "Steep-slope adder (10/12+)", unit: "sq", rate: 1.0 },
  { id: "r_underlayment", cat: "Roofing — steep slope", task: "Synthetic underlayment", unit: "sq", rate: 0.15 },
  { id: "r_iw", cat: "Roofing — steep slope", task: "Ice & water shield", unit: "sq", rate: 0.25 },
  { id: "r_dripedge", cat: "Roofing — steep slope", task: "Drip edge / perimeter metal", unit: "LF", rate: 0.02 },
  { id: "r_ridge", cat: "Roofing — steep slope", task: "Ridge vent & caps", unit: "LF", rate: 0.05 },
  { id: "r_ss_panel", cat: "Roofing — steep slope", task: "Standing seam panel install", unit: "sq", rate: 3.4 },
  { id: "r_ss_trim", cat: "Roofing — steep slope", task: "Standing seam trim / flashings", unit: "LF", rate: 0.08 },
  { id: "r_tearoff_flat", cat: "Roofing — flat / low slope", task: "Tear-off — BUR / EPDM (per layer)", unit: "sq", rate: 1.5 },
  { id: "r_iso", cat: "Roofing — flat / low slope", task: "ISO insulation install (per layer)", unit: "sq", rate: 0.5 },
  { id: "r_coverboard", cat: "Roofing — flat / low slope", task: "Coverboard install", unit: "sq", rate: 0.5 },
  { id: "r_epdm", cat: "Roofing — flat / low slope", task: "EPDM membrane (fully adhered)", unit: "sq", rate: 1.538 },
  { id: "r_tpo", cat: "Roofing — flat / low slope", task: "TPO mech-attached + welds", unit: "sq", rate: 1.176 },
  { id: "r_termbar", cat: "Roofing — flat / low slope", task: "Term bar / edge detail", unit: "LF", rate: 0.06 },
  { id: "r_parapet", cat: "Roofing — flat / low slope", task: "Parapet wrap / coping", unit: "LF", rate: 0.15 },
  { id: "r_pen", cat: "Roofing — flat / low slope", task: "Penetration flashing", unit: "ea", rate: 0.75 },
  { id: "r_wall_frame", cat: "Framing & decks", task: "Wall framing 2x4/2x6", unit: "sqft", rate: 0.08 },
  { id: "r_rafter", cat: "Framing & decks", task: "Rafter framing (stick-built)", unit: "sqft", rate: 0.12 },
  { id: "r_sheathing", cat: "Framing & decks", task: "Sheathing install", unit: "sqft", rate: 0.025 },
  { id: "r_deck_frame", cat: "Framing & decks", task: "Deck framing (PT joists/beams)", unit: "sqft", rate: 0.15 },
  { id: "r_decking", cat: "Framing & decks", task: "Composite decking install", unit: "sqft", rate: 0.1 },
  { id: "r_railing", cat: "Framing & decks", task: "Vinyl/composite railing", unit: "LF", rate: 0.4 },
  { id: "r_vinyl_siding", cat: "Exterior", task: "Vinyl siding install", unit: "sq", rate: 3.2 },
  { id: "r_ag_panel", cat: "Exterior", task: "AG panel siding/roofing", unit: "sq", rate: 2.0 },
  { id: "r_housewrap", cat: "Exterior", task: "Housewrap", unit: "sq", rate: 0.2 },
  { id: "r_soffit", cat: "Exterior", task: "Soffit install", unit: "LF", rate: 0.08 },
  { id: "r_fascia", cat: "Exterior", task: "Fascia / trim coil wrap", unit: "LF", rate: 0.06 },
  { id: "r_window", cat: "Exterior", task: "Window/door install (replacement)", unit: "ea", rate: 2.5 },
  { id: "r_lvp", cat: "Interior", task: "LVP flooring install", unit: "sqft", rate: 0.025 },
  { id: "r_dw_hang", cat: "Interior", task: "Drywall hang", unit: "sqft", rate: 0.012 },
  { id: "r_dw_finish", cat: "Interior", task: "Drywall tape & finish", unit: "sqft", rate: 0.03 },
  { id: "r_trim", cat: "Interior", task: "Interior trim", unit: "LF", rate: 0.033 },
  { id: "r_slate", cat: "Roofing — steep slope", task: "Slate / Nu-Lok install", unit: "sq", rate: 4.571 },
  { id: "r_slate_ridge", cat: "Roofing — steep slope", task: "Slate ridge install", unit: "LF", rate: 0.04 },
  { id: "r_shake", cat: "Roofing — steep slope", task: "Wood shake install", unit: "sq", rate: 3.2 },
  { id: "r_ss_copper", cat: "Roofing — steep slope", task: "Standing seam — copper", unit: "sq", rate: 6.667 },
  { id: "r_steel_panel", cat: "Roofing — steep slope", task: "Steel panel roof (26ga)", unit: "sq", rate: 3.2 },
  { id: "r_step_flash", cat: "Roofing — steep slope", task: "Step / wall flashing", unit: "sq", rate: 5.5 },
  { id: "r_epdm_mech", cat: "Roofing — flat / low slope", task: "EPDM (mechanically attached)", unit: "sq", rate: 1.143 },
  { id: "r_tpo_adhered", cat: "Roofing — flat / low slope", task: "TPO (fully adhered)", unit: "sq", rate: 1.6 },
  { id: "r_modbit", cat: "Roofing — flat / low slope", task: "Modified bitumen cap (SBS/APP)", unit: "sqft", rate: 0.019 },
  { id: "r_gutter", cat: "Exterior", task: "Gutter — 5in K aluminum", unit: "LF", rate: 0.064 },
  { id: "r_downspout", cat: "Exterior", task: "Downspout — aluminum", unit: "LF", rate: 0.042 },
  { id: "r_fibercement", cat: "Exterior", task: "Fiber cement siding install", unit: "sqft", rate: 0.039 },
  { id: "r_woodsiding", cat: "Exterior", task: "Wood / cedar siding install", unit: "sqft", rate: 0.027 },
  { id: "r_studs6", cat: "Structural", task: "Wall framing — 2x6 studs (8ft)", unit: "LF", rate: 0.016 },
  { id: "r_rafter28", cat: "Structural", task: "Roof rafters — 2x8", unit: "LF", rate: 0.017 },
  { id: "r_joist210", cat: "Structural", task: "Floor joists — 2x10", unit: "LF", rate: 0.018 },
  { id: "r_truss", cat: "Structural", task: "Roof truss set", unit: "ea", rate: 0.582 },
  { id: "r_lvl", cat: "Structural", task: "LVL beam set", unit: "LF", rate: 0.033 },
  { id: "r_ply_roof", cat: "Structural", task: "Plywood sheathing — 1/2in", unit: "sqft", rate: 0.011 },
  { id: "r_subfloor", cat: "Structural", task: "Subfloor — 3/4 plywood", unit: "sqft", rate: 0.013 },
  { id: "r_deck_joist", cat: "Decks", task: "Deck framing — joists 2x8", unit: "LF", rate: 0.015 },
  { id: "r_batt19", cat: "Interior", task: "Batt insulation — R19 wall", unit: "sqft", rate: 0.007 },
  { id: "r_blown38", cat: "Interior", task: "Blown insulation — attic R38", unit: "sqft", rate: 0.021 },
  { id: "r_spray2", cat: "Interior", task: "Closed-cell spray foam — 2in", unit: "sqft", rate: 0.008 },
  { id: "r_casing", cat: "Interior", task: "Door / window casing", unit: "LF", rate: 0.032 },
  { id: "r_demo_shingle", cat: "Demolition", task: "Tear-off asphalt shingles", unit: "sq", rate: 1.143 },
  { id: "r_demo_flash", cat: "Demolition", task: "Demo — flashing / sheet metal", unit: "sqft", rate: 0.028 },
  { id: "r_demo_gutter", cat: "Demolition", task: "Demo — gutters", unit: "LF", rate: 0.033 },
];
const QUICK_DIMS = [
  ["Roof area", "sqft"], ["Pitch", "/12"], ["Eaves", "LF"], ["Rakes", "LF"],
  ["Ridges", "LF"], ["Hips", "LF"], ["Valleys", "LF"], ["Step flashing", "LF"],
  ["Wall flashing", "LF"], ["Perimeter", "LF"], ["Parapet", "LF"], ["Penetrations", "ct"],
  ["Wall length", "LF"], ["Wall height", "ft"], ["Wall area", "sqft"], ["Floor area", "sqft"],];

const CATEGORIES = [
  { cat: "Site Work & Prep", subs: [
    { label: "Excavation, grading, land clearing", hint: "dig, grade, clear" },
    { label: "Foundations, footings, concrete slabs", hint: "footings, slabs" },
    { label: "Drainage, retaining walls", hint: "drainage, retaining" },
  ] },
  { cat: "Structural Work", subs: [
    { label: "Framing", hint: "wood, steel, or concrete" },
    { label: "Masonry, blockwork, structural beams", hint: "block, beams" },
    { label: "Roofing structure", hint: "trusses, rafters" },
  ] },
  { cat: "Exterior Systems", subs: [
    { label: "Roofing", hint: "shingles, metal, flat systems" },
    { label: "Siding", hint: "vinyl, wood, metal" },
    { label: "Gutters, soffits, fascia", hint: "gutters, soffit, fascia" },
    { label: "Windows, exterior doors", hint: "windows, doors" },
  ] },
  { cat: "Interior Finishes", subs: [
    { label: "Drywall, plaster, insulation", hint: "drywall, insulation" },
    { label: "Painting, wallpaper, trim", hint: "paint, trim" },
    { label: "Flooring", hint: "tile, wood, carpet" },
  ] },
  { cat: "Utilities & Mechanical", subs: [
    { label: "Plumbing", hint: "water, sewer, gas lines" },
    { label: "Electrical", hint: "wiring, lighting, smart systems" },
    { label: "HVAC", hint: "heating, ventilation, AC" },
  ] },
  { cat: "Landscaping & Exterior", subs: [
    { label: "Softscaping", hint: "plants, trees, lawns" },
    { label: "Hardscaping", hint: "patios, pathways, decks" },
    { label: "Fencing, lighting, irrigation", hint: "fence, lighting, irrigation" },
  ] },
  { cat: "Specialty Trades", subs: [
    { label: "Solar panel installation", hint: "solar PV" },
    { label: "Smart home systems, alarms", hint: "smart home, alarms" },
    { label: "Custom metalwork or glasswork", hint: "metal, glass" },
  ] },
  { cat: "Demolition & Remediation", subs: [
    { label: "Demolition, haul-away", hint: "demo, haul-away" },
    { label: "Mold remediation, asbestos removal", hint: "mold, asbestos" },
    { label: "Structural reinforcement after removal", hint: "reinforce" },
  ] },
  { cat: "Finishing Details", subs: [
    { label: "Custom cabinetry, built-ins", hint: "cabinets, built-ins" },
    { label: "Specialty lighting, accent features", hint: "accent lighting" },
    { label: "Final staging, decorative elements", hint: "staging, decor" },
  ] },
];

const CAZA_LOGO = "data:image/jpeg;base64,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";
const AL_NOTEPAD = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADwAPADASIAAhEBAxEB/8QAHAAAAQQDAQAAAAAAAAAAAAAAAAQFBgcCAwgB/8QAShAAAQMDAQUFBQQGCAQFBQAAAQIDBAAFEQYHEiExQRMiUWFxFDKBkaEII0KxFSRSYnKCFjNDY5KywdFTc+HwFyWDovEYNHST0v/EABsBAAIDAQEBAAAAAAAAAAAAAAAEAgMFBgEH/8QAMhEAAQQBAwIEBQQCAgMAAAAAAQACAxEEEiExBUETIjJRFGGBkbFCcaHwJOEjwTNS0f/aAAwDAQACEQMRAD8A6MooooQiiiihCKKKKEIoopBer7a9O2ty43icxBiN+868rdGfAdSfIcaEJfSO53e3WWEqZdJ0eDGTzdkOBtPzNc/av+0lPucxVp0BbHFuLO6mY81vuK80NdPVWfQVDWdnOp9XzRc9Z3uQXFcdxbnbOgeH7KPQZ9KsZE+T0hVSSsj9RVv6j+0roqzqU1bRLvbyeALCOzaz/GvB+QNQaR9oDaFqRRTpnSzMZlXJzslyCP5jhP0pysmgdOWJKVR7Y068P7aQO1Xnx48B8AKkRHAAchyHhTzME/qKRfnj9AVdOzdtt9JMvUK7clX4UPIZwPRoZpG5s01fcgVXTWr7pPPeded/MirSyeor3nTAw4hzulzmyn5Kpv8AwQU7xf1G6s//AI+fzXXo2IJb4s6heQrxEfH5Kq181551P4WL2/Kr+Lm/9vwqvb2Z6ot3etetZLKhywt1r/Ko0uZk7a7CAYepVXFKfwuPIeyPR1OfrVhDxNZAVA4cR42U25so72obH+0Br7TagnVOkmpDKebqELjk/wAw3kfSp5pz7R2h72UNTnpNlfPDEtvebz/GjI+YFJSCUlPQ8x41HLzs/wBNX0KVItjTLx/to33S8+PDgfiDS78E/oKZZnj9YV/QbhDukNEuBLYlxl8UusOBaFfEcKUVyR/QDV2iZarjoi/PgjiWQvs1q8iPcX8celTPSH2k3ocxNp1/alw30HdVMYaKcea2jx+KflSL4nx+oJ6OVknpK6EopHa7tb73bmp9rmMzYjwyh5lYUk/EdfLnSyq1aiiiihCKKKKEIooooQgUUUUIRRRRQhFFFULtZ27ORpbmldDqMq5rV2L01kb/AGauW41+0vxVyHTjxAhS3ahtss2z5tcGMEXO+EcIqVdxnwLqhy/hHE+XOqLasGsNrF0Re9W3B5iEeLSCN0hPg03ySP3jz86eNE7MG4DqbvqLE25rV2gaWd9Dajxyon31+fIefOrH8+taUGH+qT7LMnza8sf3TVY9NWnTcX2e1xEMAjvr5rX/ABK5n8qdBXtGK0wABQWUXEmyvK95V5UW2g6oe0zpwKhkCfMX2EckZ3DjKl/AfUiovcGNLipMaXuDQlt+1nYtNr7O4zkpkEZDDYLjn+Ecvjio1/4x2PtMG3Xbc/b7FP5b1UzKnlh9zcUXpCiS6+4d5SldeNJv0nLzntifgKynZryfLstduCwDzbro+y6607qB0MwrglMg8mHwW1n0B5/AmpDu54da5WRcW38JltA+C08xT7M1Pf3rS1b37xJftiee6rvkdApQ4qSPWrGZ23nCqfgb+Qq7rprfTVlWpubd46XU822yXVD4Jzj400jazpPex7XKCf2jFViqdYZYbQC0hABGQR1+NbqrOc8nYBWNwWDklXvatYafvq0ot92jPOq5NFW4s/yqwT8KexniMcq5odjMve+2nPiOBHxqTaa2g3fTK0MzVuXS1jgUrOXmR4pUeY8j9KujzQTTwqZcEgWwq8aar9pq1aliez3OIh4Adxzk4j+FXMenLypXbLnDvFuanwH0vxnhlC0/UEdCOopVWgQHD3CzwS0+xVRptGtNkVxcvOlJ7ku25y8yU7wKf71vkR+8niPKr22ZbZbHtEZTEOLdekpyuG4vIcxzU2r8Q8uY+tMoPCq51nsyRNeN500r9H3VtXa9m2rs0uKHHKSPcX58j5c6zZ8OvNH9lpwZl+WT7rqeiqN2SbcV3OW3pTWn6pem1di1KdG4H1DhuLH4XPPkryPO8qzVpoooooQiiiihCKKKKEIooqpdum1NWjLKmyWZ3N/uSMIKOKozZ4b/APEeSfiegyIUa2y7Vrhcrv8A+H2h+0kXCQv2eW/HOVbx5soPQ/tK6cR41KNl2xu1aGtJeuDbVwvclG6++RlLQPNtvwHirmfIcK0bFdlaNE2YXi7MhWoZ6Mub/ExkHj2Y/ePNR+HTjalVOeb2Uw2+VGomjoyHXFSnFOI3j2aEnGE9MnxrZN0hCdZPsilsOgcMq3kn1zUhoNWfFzXq1Kn4SGtOlVY8yuO+tl1O64glKh4GsN3hwFO+pilWoHykEcEjljJA401Yroo3l7A491z0jAx5aOywCeHnVX7ZmHA7YJHHsUrebPkohJH5H5VaYSaadV6bZ1TpyRbHVBtasLZdxns3B7qvTofImoztL2FoU4HiOQOK5XXnfUFc8nNPt00fdLLpi3Xu4ITHZuaiIzSs9otAAJWR0ByMZ4nOeVYTrU7adTIh3lgx1tvJElB5FORlQPUEcciuvtR6Tser7Mm3XSIl+KkhbJQrdU3wwClQ5cPhiuL6hnHDewOGxu/ouohi8UEgrilhh6U+hhhpbzrh3UoQkqUo+AA4mpC/pnU2m4qZVzsVwiwl81usKCRnz6fGuotP6G0hs9bXMhsMQ3Fd1UyW8CvHgFKwB6DFSpJjzohwWpMZ9ODjC0OJP0IrOl67TrjZ5fmr24m253XFJWYaO2YHaR18Skfh8x5UqZktvjuHBHNJ4EVPNqezs6IuZutsaJsExeCgcfZHD+E/uHofh4ZrlxhLKgSSGc91xPNs/wD81vwTsyIxIzgpN7Cw6Sl/OjPexWhp8pcDL+6lz8KhyWPL/aspLhbYUU8VnupHiTyq5RTxojV8nSMwLWVvWd9w9uyOJb447RPn4jr8sX+w+zKjNyI7iXWXUhaFpOQpJGQRXNKGg3GS1zATunzqzNj1+WpqXpuQ4VGKO3iknj2ZPeT8CQfia0cOcg+GVnZkAI8QfVWbQB0rLHGvQK1FkqE6/wBnsbVkUyogQxd2k9x3kHQPwL/0PT0p82JbXpMuWnRGr1rau7B7GLIf4Kex/ZLz+MdD+L15vQqA7TNCm/xf0xaklu8wwFDc4F9I44/iHQ/DwpHJx9Xnbyn8XJ0eR3C6aoqq9h+1Ia80+bbc3QL/AG5AD2eBkN8g6B49FeeD1q1KyVsIooooQiiiihCYNb6ug6H0jNvk87yGE4baBwXnD7qB6n5AE9Ko3YxpKdrnVkvaXqr9YUXyqGlY7q3Rw3wP2EcEpHiP3abNrd+k7UtrEbR9reP6KtTikOuJ4pKx/Wuee6O6PPPjVoWdarBBYh21Rjx2EBtDY4gJHLhV8eO6VpLUvLkNicAd1ZG9XoUKhK9SXJacdqhP8KBW23alfigolBUhBOd7PeH+9RODKBaBnRE0piDXuaYDquCBkNvk+G6B/rRG1TEcH37a2TnmO8Ko+Glq9Ku+KiutScrpbGbrFDLp3SFBQWBkjxx8Kj930w1DgLkxnVnshlaV44jxFOD+p4TaMs9o8rw3d0fM1qVquIpogxnVHlunGD8aYhGTHWkGvZLzHGkvURfuogOIr05p4ulzgXBxKxAUlQTjeCwgk+eAc00EAnhWyx5cLcKWO9oaaabUKvNih6z2o2qwz2EORYcB2e6MYU7lW4lG8OITnjWei5uuXf0jbtKTrbctP2x72WLMu6FhRwOKUFv30p5ZPTGPCkW0CLOc1JYkWCYY17uaXbZhIzvR1jvqJ6BOSc+flVlOaUkQdJQNOaduJs0VgBt2S2jef3AOO5ngFqUclR5ZOPLjOsN/yT4hBBqgeB8/37LpunDVCNI4TdD2bs3CYbnrSSnUlxIwhDiNyLHT+y21y+J4mtJ0ZfdKz3ntCSoDECSd921XALLDa/22lJ4pz1Ty+mJHpjTZ0zAchpu9yuba176VT3Q6tvhxAVgHBPHBp6xisVzz6eW+3b7LVEYriioBN0ZrHUUB9i+6xaYakoLa4dvt6Czg8wS5lSqpnWezC86BbD61m62UjBkttkFk+C05OB58vyro7Ut5nWS1+02+xTL28VY7CMUggYySSenoCaSaR1fbtb2Z59hh1h1lZYlw5KcLZVjilQ6gj58fAimceaSAa2gaflQ/CqfEx503uuS2UMNSIzrzYl29t1C3GsnO4CN5II44IyPGpZrbTMG2TIt6sanndPTSfZi4reLSyPdJ54PHdzx8at3UmwnTd2eck2p16xyFnJTHAWyT/wAs8vgQPKq/tsB7TSL7pa/k3DTTUoQnLk2jCIrykhSSRklAyRx5A/CnZc0kCSLeuR7j5fP8qhkABLZO/B+agA4066OmG37RLI+DhLrxjL8wsbv+tJLra5VivEi2TOLzB4LHJ1B91Y8iPrms9OMGXrmwMJ94zUL+CTk/QVsQSB5a9hsGqSEzdLXNd810bjhXm7WfPnQRXRWucWIBpdbbTJubhDICUp95auAFIc4NTvTqWxYmCj8WVK9c8aVypjCy28pnFhEz6dwqB2maQumyrVsDaFpxe812/wCtoSndQlw8wR+w4Mg+B9RXQulNTQNX6XhXy2rzHlt726T3m1clIPmDkfCi8WeFf7LLtVxZD0OY0WnUeIPUeBBwQehAqh9kN2mbMNq1x2cXp0mHNezEdVwSXCMoUPJxOB/EAPGsUPL9zyt3SGigukKKKKkvEVBtsGtxoXZ3NnMuBNwk/qsMZ49ooHvfyjKvUDxqc1yf9oLUa9WbU2NOxXMxLOnsldU9qrCnD8AEp+BoQnfY5pY2rTarzJRmbdO+CrmloHu/4j3vlVilNVrbNpc+C0hm42Rt9tCQkLt7m7ugDA+7X/oak9r2iaXupShNyTEdVwDUxJYVnwyrgfga1oZY9Ia0rGmilLi5wUj3eFBTWaClxsLQoKQrkpJyD8a9IxTNpWlp3a9xitmK83c17a8pYYNeYJFbN015umi15SwxgV5u5OAOJrZimrVFxNn0pdLik4XGjLWj+LGE/UivCaFlSAs0E27PYw1JtAvuq3O/Ft5/RUA9OHF1Y9c8/wB40i276+u2lmLZa7LKXDkSwp519vgsIScBIPTJzn0FTLZdZxZNmdkjbuHHY4kuZ5lbnfOfmB8K911pXS13jN33U0VbzVlbW+SlRwUDvFKkj3hkcv8Ac1wEmQJMsySCxa7RkJjxwxmyWWi+rj7PrZeb6oofchsuPAJ7ynFhICQnqpSiAAOpqQ+tQLTRna8nwtT3GP7FZYp7W0wCQVOK4gSHccMgZCU9OfmZ7SMrQ013/uyajJIvsovqjaLpvSF1hW27S1okzMEJQjf7NJOAtfgM58TwPCnpmzwo18l3ZlrclzGkNPqScBwIJKSR1I3iM+FUbtC2Z6l1VtsLqIjirTK7E+1/2bTSUpCgT+0MKwOuRV/gADAGAOAFWzMYxjdB3I3UI3Oe46hxwmbVciQzp55qFeItnuEohiJJlYKA6rknj1IBA5+ODjFRrZ8bauxT9I3C2KjXOLvfpSLJX2plFz3n9/8AGlfj04Dwp01++lFhcRJt8a62lKSq6RCfv0xzw7VsZ5oIz8OBBFV+7cF2K52a4ypntDlgnMwVzyf/ALy1ykksuLPUpwfinNQdAZYC0c8j9/7+bHdQe6n2oxfbM3cIV3sTb4VdtKSHERVuL7z8TmltR6kA4HmBSbY9Zl3HVUm8uIPYW5stNlQx96sYPyTn5imyfdZC7y9q+I2PbJdyU+wgpyVoWrCEY9ACPA1Z2he29vuhaYlNwH9yQr2mOWCJSie1CUkDu4Cc9AeRNdF0dml1E2L9uDW/87rM6iT4V7A0O/IUxxwr1psuvIaBAK1BOT5nFOUGzOTgo9uy1gZAUsEn4CpRFtcBmOloMsuKRjeUQFHPjmt+bLZHsNysSHEfJvwFsiWuJCYDTbKD+0pQyVHxpWlCUJCUpCQOAAGBWBfbQ4EKWlKlcgTgmsiSOdYTi527lutDWimrLPgapX7RekXJlgiavtyS3cLKsB1xvgrsSrIV/IvB9FHwq2n7xCjPBpx8BR544hPrjlSG7XK0TbZIgyf1uPKbUy62ke8hQwefkatZFJYIBVbpWC7IXuzjV7euNBW29pKe3dR2clA/A8ngsfPiPIipRXN32frq9pPaNftAzXD2bylOxt7q431A/ebwf5a6RqZFbFeA3uE3367s2DT1wu8gjsYMdchWTz3Uk4+PL41xBY0vXq5XC8y33PapDqlqWhWCVKJUo/WulftI3w2nZM7DQvdcukluNw57o76v8gHxqgWdOKslrgMXeM209KjomMKJx2jbgyCDw4jOCOhx41ElSCyPtzTu52jLqcZQFp3SrxGRwz8KxU+clMqG52a/eG6HEg+PDx9K8TEd4pEt1KkkFOSFjHQjP+9blrmR0lRbbfHPuEoV8jn86ipL23S0wV79mub8F0n3YzxSPig8D8qk9v2jamgr7OWmFdGxxBcSWHVD+JOU5+FQx5bC3Q9IirCXMBYcb3gfBQUM/wDx6VuYjx38Jiylp7PiAhzeA+BzVjZXs9JVT4mP9QVpwdqVmdAFyizbWo8CpxvtW8/xoz9QKldtutuu7Pa26dHmI8WXAvHqBxHxqhyJrOSlTUg+GC2o/mKSksl1EpcV1pwgZcbzkeYUjiCKZZmOHqFpV+E0+k0ujCKMVSdu1nqCEkCDfDNQn+xmAPD03uCx86mmnNo/6RuDEG6wmoa3zuNyGnSW1L6JIUMpJ5DiePCm2ZTHbcJOTEkZvypt1qI7VCobMbyU89xAPp2ic1MSmmbV1rVeNG3aAgZcfirCB+8BvJ+oFXv3aQl49nglS+JKi27S8aVIebjxI8Rta3FnCUICBxJ8MUQZtv1PYEyWUqkW6c2pI7VsoDrZyknB44IzjxFQiBFXtI2BwobD4Q9IjNMrJOBvsrSFJPhnc+opu0tph3TV9e0nH1TP09NK1OW1bwTIh3FknIHZr4JdTnCgkgkAEA1wEeMJCWg04Fdo6YtANbUpfoHSk/RtqlWh+4om25EhS4A3SHGWiSdxR5Hj4efjgSpSghBUo4CRknyqOqsu0xhRQ3ctKSkjkt2NIaV8QlRFIL1C1VarWqdqjXlm09CR7yoEAlxX7qFOqJJ9Ek1N2FM92p1LwZEbW0FKLfcYV2gtzbfKZlxnBlDrKwpJ+I/KlVU3s0iT7RtRuLERm5M2K6QjPSm4rBfWoLCQ8tIACFLVv4GM49KuOlJ4hE/SDavifrbZTDqDTpuVwt11gqaYucF1I7RY7r0dRw6yvHNJSSQOigPOolrXQN7vGlBpew/o6JZoiUdkiUtbj8goJUE744ISM4Gcn0FWVSC93mFp6yyrtcHQ1FioLiiTz8EjxJPADzojle0gN+iHxtIJKofZ/pyRqG5s3i5MtxYNqeKGYYO8oyEYBKvAJ6CrcPHiSSfOovs6gyY+k/bJrfZSbpJduDjZ/B2hyB8gD8alWK+g4kLYYg1opcZlyullLnG1iBWSVKQcoUpOeoOKBXvSmkqjeKjlSiT4k5rJT7qhul1ZT4FRrAcKMV5QXtlArLpWIFZJSVHABJ8BQpBVFtMW7o/aXpzWkVJ7rie13fxFsjIPq2rHwrqmO+1JjtvsqC2nUhaFDkUkZB+VUVtd0q/ddk025bqf1BSJTY/EUhW6o+Q3VE/Cp5sSvZv2x+xvLXvOxmjDcyeILZKR/wC0JrHn0+IdK2ce/DGpVN9qi5GRqDTdjDgQlDS5CsnhlawgE/BBqbT7Zbtq2zCM/bkMM3GAncZRkKDTqEhKmieqFJAGfApPSqq24z0yftBBDgUtEFhhvCQVH3C5yHmulmhtbxNHaiTM7dAt8vDU1kd07ueDgScd5BOfNJI8KUkBPCaaooYMVDqkIQuI8glDjSV7i21A4UlSehBGOVYuJlMKRuyd5B4feoyQenEYq19smiYocGrITLTsWQEicUgEDgAh8HwPBKj4bp8aqX2ABakh55ttXuhLmR5jByKGmxaCKWbftjRUVMJWjmOyXxHwOK1yH7fI3hIbLLmOa2ykjz3v+tb+zmNgdk+04n+8QQfmD/pWhMmQ44lxEQ7yCUL3Fg8OqcHHqP8ArXqFjHSFN4YluBbfvJQ5vg+YBz/3wrehmbHKlIUy/v8AewQUfHhkVpKoXbHtWQ2FHPfaKSk+vh8a2hlCUExJThP7CHQsY8gc0IWp4pkK3n4S+0aJzwCx6ZHEeRxXobivJLbclSAR3m1Kz8wrjW5LMtJDqH2nMjkpBSVDzI8PSsXXS8CzJhlS/eG4Qv4jODQhWts/1Qu5wv0VcpHaXKOCULUMGQ0OSvNQ5K+B61M+IOeornNuUzAfZmIkKt0uOsONqypACh4A8weRHgSKsZnbXYF25pxUSc9MI+9Yis7yUq64USMjqPI8a1MefUNLuVk5GPpdqbwU66PmDQ20SZpiSeztN9cMy2LPuoePvs/Hhj0T41YGprXBvGn5MefaRd20pLiY2QFqUOW4okbqvA5HrVE6u2jWzU1kXCf01c0BJ7VmQXUIWy4OS08D/wBRUo2a7botwix7Vq15MOeAEtTV8GpA6b5/Crz5Hyrnup4TmSeNEOVs4ORqj8OROdicg3aem1WjWevLc5jjCfSvLAHQrcbO6OnvVLbZoOyW64puTyZN1uSPdm3N9Up1P8JVwT/KBUkCwtCVpXvJUMpIOQR4iisaTJkftZr91pMha3eliG0B0uBCe0UAkqxxIGcDPxPzrJRSlBUohIAySTgAU23rUVp07GD1zmtxwr3EcVOOHwSgZUo+gqo9Wapves9VWrSz8WTpyw3TeWsPrDUqW0nPAjOUBRGAnmfPlXuPjPneGjuiadsTST2TrL1LqHXWqnXNJXlVpsdq3mhM7IOomvnGe6eCkAdfj1GNo0bPu9wYmavvzt+9mVvsxQ0GYyFftFse8fX61J4ECLa4DMKEwiPGYTuIbQMBI/769aUc67aDAhhAptkd1yk2ZLKTvQKw60Acaz3RivQKftI0sN00eVZ4rwg0Wilhg0AGtmK83aLRSWwba3JdSHpjDaScYSsFXyqRQI8O1pU2mQhS3FZyogEjwqIbgrwpA6UrLC6XYu2TcUzYtw3dSrUbMS6abuNqecbAmxXWAkqAzvIIH1qqvsq3NTulL7aVq4xJiHgk9A4jB+rdStIAWCR1FV59ndX6O2s6ytA7o3Fqx/y38D6LpOTHEIFG09FkeMTYpQjaS8p37Q2oHg2p1TbuAEkZ7rSU9aTSJ0RxtIltqacxvbrzZIHxwRit+0BS2PtBaj3WwtReVhJVu5y2k86SrlLcYS+qK+0tPLdAX6pOOP0pY8pocK3dj2sIl0gOaLujjUltTajCDigoONEd9gjyBJA/ZJH4agGstDJ0pqR23LbPsqgXYTySUlxrPukjmpBOD4jdPWmVqey1JZlxZCYk1lSXGXSNxxtY4g8fP51ejrdu2z7Mt49kxdYyuQORHkpHlx7NYPxSrxFVHym1PkUqEeafZCS1KcS2D3gsBe6PHjxrxLU1D5cQthwEYUMFG94eNZSIDsd1xpftMJcdxTT7ClkltSThSTnPL6jjXqGZLSU9jJSpCRwC2wfqMVYor321xrdDkV1JUd0FBCwT+dJ9+3pdPaNpBXx+8bKSk+pHKs1uyXXHGlR2lYxnccKT5EZH/eK3Ny3G0JD7D+/jCiEbwPnwoQvURWVJ/VpDiM/8N3eHyOaaJNwlrl+xRFpdkNnvuqQAlr4jn6YrK8SoxaQ3FQhct1W43hOCM8yfT863wIaIMZLSOJ5qUeaj41oYWJ8Q63ekJPKyPBFDkpK1bowkhU5a5MpX4ns4P8I5fCnQICUhKQEjwHAVg4hLiChaQpJ5g1kgFKACoqx1POukjibEKaKCxHvc/dxXq0JWgpUMpUMEVGEMGNMQHGWnnIiwrs3RlDqRyBHgRwqT0mmwUTEBWS26j3VgcvI+I8qWzcX4hm3IV+LP4Lt+CrT0DaIV6hGTorWFzsK0AdvaVrTJTHPX7tz8PgriD68Ktq3R5UWEhqZPVPfHvPqaS1vfyp4CuPe0l2uW3JC3oUho/dyo6ynHoocR6GppbtsutoLIR+kYdxSOSpUYKVjzUgjPxrgsrp0odV/fn7911MGWwi/wul91O/v4G/jG9jj865l23yBP2pyUodSfYYjTQUlWS2visjyIKqyuu2PWtxiqZM+JbUKGFLhMbi8eS1EkeoqEsRlz1EJ3+yWol15RJK888E8ST41b0/p8okvuoZWUzR8lLrJrrWVtisOIuqbk0pCVFienePLosd761PbDtftE11ES9x3LJKXwC3TvsKPkscvjw86rMJCUgJAAAwB4Vi60h5socQFpVzSoZFdw7DFeQ0Vy/jWfMF0egpW2lSFBaFDeCknII8Qete4rn7S2tpmhpnYoeVPsucvQyveXHB5qb8PTkfrV8QLnCusSPKhSmn2ZLfaNFKhlSfHHPh18KRNtOl3KmW7WOEpxXvTFepBUO4CoeI4ivdwjmk8PKi1GlhjqKMVlijFe2iljQRwrIDjivSKLRS1YquNk/wCrfag1M2ngHGJOR/O2qrJxjJqt9l33v2ptRqHJLEj82xSmV6QnMT1FRHbA2bb9oi5OhOUyA04AeHvMJBPzBpvQt1D6nHIyuzWMncUFcfHoamH2kLd7HtX0/dAtLKJkdDZcWMpCkOEEkdcJWmtsjZXqqOFJiKtF2SPdEWZ2a8fwuAfnWY40tQKErnxijfWPEBLqSn1HEYqQaI1UjROpG7nGwq2yAGpzTOMKb6LAH4kZz5jeHWkc/TWpLQ6VXDTt2jNngtXs5cQD47yN4Uz/APl0pzsnSyV+Cu6oHzBwa85XqtzbHo1iXHb1lbHCpgtp9tMdRwtvA3HxjngYB/dIP4aqBxiSy0UsSVgJ5IWlKs/Srh2P6pbDatEXMhxlaFG3lziFIwd9g554GSB4bw6VBtd6Ke0fqRcFt18QJO89CWVZG4ObfEc0ZHqkg+NRaa8pUjvuowlMl3s3UOMEcwopKSR1HWs1yXmyErinGcbyHAR9cVi0xJaKiiQlWTkhxv8A2IpNcpz8WI+XWWShLZIIURk8uRHiRU1FIohE69SZm6UoZ+6bB8fxH1p2FIrTG9ltrLZ94jeV6niaW12GJF4UTWrm8iTxJC5eV4pQRuk8MkJ+de0ju7nZW4rHMLQR/iFXyO0tLvZVNGpwCWivc15mnHT1kkaj1FCtMbguU4EFX7CealfAAmpOcGgk9l4AXGgnCFoHVNztDNzg2aRJiPgltbZSSoA4zu5zjI8KjM6xNRZjsabbwxJaVuuIWjcWk+BFdeCbbbFMs+nmk7ipLa24zY/ChpGeP0HrVE7bbZ7BtDXKSnCLhHQ9n94dxX+UfOsjGyzkyaJGijuFoTY/gs1Mdv3VZotsFpYIjtA9CoZP1pVjGKvvYlY4MvQch6ZCjyfaJqx980lfBKUp6jxzVMalWwvVl2MVpDMf2t0NttpCUpSFkAAdBwpuCZjpHRMbWlLyxuaxsjjdpsJwaX2nTpv0C6TFuPIRCUzHjttq3e3kuLGEHHEjBSnhjG/npTa86hlhbyz3G0lR9BVwbOdPOMSbJbHmsrtzRvM4cv1l3KWknzSN8/8ApprO61lGGIMYaJP8D/7wm+nQiR5c4bBIbnsQtruq4EGJZVswEBciVLTPcKFDCgGkhWVb5VuqJxjHrTKjY5KNoQItnuUKRcp4EdtchCjCjpxlT6tzKSR2hASfxAEGugmypTql9keHcHEdOf1/KthUR/Zq+n+9cWMqX3/n/a6AxMXPEjZlci7LFqYvccSJ6IsALQhO4lP9e6spSns2iN7GMb+ORyKwb0lfytpNruN9aTMuHs8BLjC2iY6QO3UsBwBpsZVgHBVgYI6dFb5/YX9P96O0JONxzj5c6sGZKO6gYGFUvoq7XiNPj2ue45NgTfaXLfKeaW2+W2ijipKlKO4SohJJz3eZyMT3rTDaJH9I9U3fVCiVx1q/R1vJ/wCA0o7yx/G7vH0SKf8AGK6bGLzEC/lYWQG+IQ3hY8jWLjrbSQXXENgnGVKApHcb3AtRCZLpCz+FA3iPUdKhus7omXcWG2VtOsoTw7MkqBPMKHLwqvJzGwsJG5HZEcJeRfCmlxusW1xg9IWSlRwkJ4lXpVf7BFpuu3PV92QCWyy9uk+Cn04+iaZ7tqGUmG004S41HbJShIHdAHOpL9lOApUbU13WM9s6ywk+YClq/wAyaSblnJJoUBSdihEf7p3+1FZDN0Db7uhOV22ZuqPghxOP8yUfOk2nNuFsnWOAm82B91wMISt5lbT28oDBO6rdIyRnHGrX15p0as0FebJgFyXGUlrPRwd5B/xAVyhs3iRrna5kGS8WJUR3IStGRuq9eWFA/Oq5zTbTcYs0ugoW0jQz5G7dn7Ss9H0uxx9QU08lmxaoawidaL42R7rzbMn6jBqkV6QeKSY0hl3+BZT/ALimuTpSc2vfMELI/EEJUfmONJiVqYMZVsal2W2aHAXcrVZ27ZcYqw8zIgSFtFtQPBXZq7pxzxS92MxtS2fvQpwEK8RVbjhSMmNJSMpcT+4oHPmlRHMVTrFw1FaWy3HutziJI3S2JC90j+FeRS3TOublpjVDN3nyHJMIoEeWktJCltZyFZTzUgkkcORUOtWh991AtpRWZb5sCa/GkuuR5UdZZfZWEq3VjnjhxB5g9QQaj18kuKbixnyF7zu8tCEd7CfjyOa6I2p6NTfBC1BZAw9MfCWSjtUtpktkFSFBR4ApHEE80kjoKpA6K1DeNpKdO+ytwp4YDhL7iVIbb94ryjIVz4YplsgHmPZUuaTsE0G4zHSeyZaaT03yVH5DhXntdxHHtI6vItkf61d1p+z/AGJhpJu90uFxex3g2sMN58gMn604P7CNFuNlLLM+MvotuYon65Feu69v6ioDpe3AVDN3ZaD+tMbif+I2d5I9RzFa7y+l9qK00pK0uupwQcgjnU/1bsVu9jjuS7DMXd47Y3lRnkgP4HPdI4L9OB8jVXW9CXrs3u5CEArKf2VHhy6GtTF6n8WPDBu/ukp8LwDrIqlI5alIjhY39xKklzsyAvcz3t0nhnFTzYrqa0WHWBVdwpCLij2eBPdIAQSr3XRySpQ3RnOPHGahPPpwpvSC3c1QWYZmszc4hR0Fa0H91PE48PlT3U2yButp24ISuC5hdpcN+y62uWiRdddW7VCLs+lyBupRHCEqb3RneGQcjO8cmobt+tfa2O03RKeMd9TCj+6tOR9UfWqTiWzWOnkFxyz6gisI4tvhhwFI/eCT08as7VO1/TuttASrYI0xqeoIUglKSgOpIPE5yOvMdaRxvNJG+J+oDbtYCamIDHte2r/lWFsuQm1bI7fIUMfdOylfFSlfkBXM63VOuKdX7zhKz6k5/wBa6G0rtE0Q1o23WaVdENdlDRHebkMrSk93ChnGCOdMOsrNsy/obcrhZTblTm2vuExZZB3yQB3N7jz8KZxpHQzP1sPmPt81TOwSRt0uHlCqbTlsRe9V2+A8B7KhftconkGW8KOfIq3U/GugNDR3FaffvjzBMq9vGYnJwQ2cJYT/AIAlXqo1UGhLKufbHCnIe1JKFuZUOaYjeVPrHkQHB6hNdCpZQlaGmowQ2ykYSlWAnhgD4D/Sua6tk+NkOo7DYfTn+fwtXCh8OIA/uVsQ0EICQ0vgMe//ANa93f7tz/H/ANa93P7lX+Oozqu/z7dNt1ms0Nl273PtFNrlOK7FhtsArcXunKsbyQEjmTzrKG/9/wBpw/3+0pLu/uO/4/8ArUX2hXeRa9KLYgKdRc7o4m3wyVe645kFfP8ACneV8KbzY9cK+9/p00lw8ezTaG+yHlxXvY+NVttQl69sd4seobo3ElQLO7lL1vCw2sqOFdqhRJQVJ7uRkefGrscRvkALvz/2oSh7WE0rStluj2i1RbdETux4rSWW/RIxn1PP41qvN0RZ7aqWtpTgCgkBPifHypRBmR7jb482KvtI8htLravFJGRUY19aZUuAiZEU6txgbnYJAIUCc7xJPADH5V1M7ntiJj5XPsALgHKKaivDNzntS2o7jK1jddBO8CRyxjjSIKBBJ6U1MXLJLKse0FZBST3UgedEuQtyPvMubqkEpWk9ceFchJqe+3clazaaKC16rkIh6amOD31t9kk9cqOPyzV4/Z5sps+x6A6tO65cXXJih5E7qf8A2oB+Nc26jkvagmWuwQQpT8t9KQlXMqUd1OfiSa7Ws9sYstkg2uMMMwmER0eiUhI/KtXDjLI9+6CbSyuWdSyn9jf2h5c+OhKbXeUF0pUkqQUOnKhgEe64k48sV1NVSfaJ0SdT7PjdYrW/PshVIGBxUyf6xPwACv5T402Rey8TY3tL0rdCBcLFD3jw3gC0r5qQP81OftGjH33GM3K2vtKKHEJc7Ts1DmCAV4+VULpy7R37IhxeFykns3M8hjkfiMfWnrWzKpm0K+FQSGmpzqScc+8aHYjHEAHlVjKc29Q4VwydOwJtomyLdfETWozSnHGnWMKwATgkYIzjniqmvsJ6C7lTCkpUpJSoEEY3xirV0IgHZUtaFKKFWp0Aq4ng6/UR1AyZlnKFxVhYU3uKyCB308yDyrMe0RvAHutBri9llK/6V3TQ70VmM1DuEIqeTHYk76VRwcKUlKk57ueQI4DhyrPQ9+XrLbFdry/AbhLiWlqMlptzfA3nN4nOBz9K07RdPTocm2duwndLj26UrBBO6KQ7JVGBtNvUN9Km1zLe082FdQheDj51Gc/8bh8l7GPMD81dCwotqCFBK8cCRkA+nWozM0dKuKyuTq/UKFHpEfbjIT6JSj8yak9e1iteW8LRc0O5UDf0bq63ALseupUjd4hi8MokIV/OAFD4CqQuegNWaWlvyrpZX5KXXC45Mh/foOTkkgcUj1ArqugeNPYnUJMV+toB+iVnxGTN0klcpWKBO1ddm7TY0b8hfF11xJCIyOq15+g6muiNG6HtOireWoLfay3R+sTXRl18+Z6DwSOHrzp4hWqHb5MyQw3iROd7aQ6ripxWMAE+AGAB0HxpZV3UeqS5xAOzR2VeHgx4w23KR3OZMgsh6HbV3DHFbbTyUOY/dCsBR8siq81NpnT+0q3S7jYsQtTQeC0uNFl7exnsn2zxweQVx8iRU3vd/VYMSZdvfctgGXZcf7wseJW3727+8nOOoFRjXdyttgdsOuWX0JCJLcZ+Qz3xIiOg5HD38YC0+GOFKY7nscHM2PYj8K6YNcCHbjuFRUSSmTHS4ngeSk9Uq6g1k62++tuNFTvSpLiWGB4rWd0fnn4U46pvFrumtpUq0w1w4D7TSI++12fbbid1S8dCeHPiQM0u0a2G71MvrrXaM2KOXEI/4klwFLaB54z8VCvoj88jB+IIp1cfPhck3F/yfCHH/St/QNmjs3R91pKVwLDGTaIqieBWAlb6/U/dj1CqnrLR7PeU0gKX3j3vHkOXhimbTtoFk03AtTimnH0p3pK9099xR33VfFZPzp67v91/+s1wRsldJ2TTq2+t6W0vMu6oiZC2QlLbIXjtHFqCEJzjgN5QyegzUQn6F1Dfp0K53bVq4dxhFSmU2yGhtEcqGFJClZWscMHeODjlWzaR7FPv+m7NeV9np+Y46Je6S0hx7dHYIWsEEJJ3jz4kClP9FNQWoAWLV0vs0cBFuzSZbfpv91wD4mvHP0gAGif781ONmo2Ra1C37QbQoORr7bdQtJ5sTovsjhHgHG8jPqMVIQWr5p55u7W9yI0+0tuVGk7p3RjvcQSFDHEKH0pLaLhfzIEW92dppfSXBf7VhXqlWFo+II86S7RpzcDZxfFLXureiORmQPeW44koQlPUkk9KV3c4N2v3H+kzsGk/lUns11ZMt8FcZLrrzUNRbS24ogFo5Ujh05k8KdJc+Y7Fkx2nlKTLG64lZ3gsZ65pvv0dFg2iTYQaShSbdBStCBwC0tJSeHwrdGfDyd9OcZwCetPzSvuwdufuFkFjQSKTTcbdHjMpW2ohQG7u8yfEmtBhyh2eDnfTvZB4D1NSIpQoHCRx5io9rG6It1hUy2Uh6RltAHMD8R+XD41CN7nEMCC1PewHTytVbWXr863mHZkdqnPEdocpbH+ZX8tdZVXmxPRR0Vs2hsyG9y4XD9clZHFKlAbqD/CnA9c1YdbwFCgooFYrQlxtSFpC0KGClQyCDzBrKivULjTW+jI+zjawYE1chjT09fbMOtIC1JaJ5YJAJQrgeOccetTDWcGyzNVXQN6qgxHnJLiyzLYebTknPBwJUlQ8+tXFta2es7RNFuwUBCbnFy9BdVww5jign9lQ4H4HpXHzUuSy65a7khxqTFUW1pcyF5ScFB9MYqbSQeaVUjQey6k0dEMHZauP7VFl7lre++iudo0rLjx7qsDPP51Erm87+jVJVHUnKmxkKCgO+mpLs9IVsYbVjGbS9w/9R6ozclv/AKOKVNJ4qbypK+X3iehFZE//AJB+60YvQf2U+2kBHtlnK8YDsgDP8Iqtr/Dnwbjb9S2FlLlytaiSwOHtTKuC2+HXHL49cVZO0lYblWhRCj97I90E/hHhUPMpgjvOBPkobv51VKafanGLapdpPWll1lAD9rkjtkj76I53XmFdQpPP4jhUgzVMXLSNmvMoTQlcacDlMuG6W3QfHI5/GmhnUmqYFyZhWvWs2Ww46Yzbs6Ch5ouAHKQ4TlXIjIGM9aUOKH7xn7q8TFuzgr+ryuetRbUdd2Ja436Wt8mQhQQoM24gJJTvY3lDd3sYOBx41HZG0/WlzjKW5qt5DWO8mIyhojPTujNXwdKmm9JH3VUmcyPkFdT0ju12g2O1P3K5SERokdO8txX0AHUnkAOJrmy36713p8m3IvctJaSPuLjGDjiB45WN7H0pvvFzv2p30SL3eJUxbR3mQCGkNK6FKE8AfOnIugZD3cjT72l5OqxNHBtdK2HUrN8tK5z1vn2lLSd91FwZLW4nGc7x7qhjjkHh1rmu63h2/pVaoxSnTkSbJfgMYx3VrO7nyAJ3R03jWy43jUl8iJh3a/T5sQc2XHAlCsftBON741pabSykJTW50vohgeZJ/oFl5vUhK3RH90haKYVvmtTIq5iUtZiOdphcRYO9vYPBQOMHrirb2Y2cSWrFEILhKlX2fupPBWd1hs58FAHH90arGS12sdScp6HvDKTgg4I6g4wfKrB0ntig2ePOlXSyXJ66znQpxUYoDSUITuoSklQOM7yuXNZrzquHI2mwNJad/r+yMLIa8EyEXx9FfDZU44twF447gOB05/X8q297H9t9Kp7/AOoC0toCWtM3ZQAwN59tP+ppM59oeIHW2k6RmKW8oIQFTUcSfga544U7RZYQP2Wn8RGTQd/Kkm1CLFF407cb3F9q0/GddbnNujfQjtEFCHVD9lKjz6b2aVRNN3mxobVpq/iTbyAUQLpmQ2E9OzfSd9IxyzvCojc9sMiZEcZc0Sjcxg9rcUEceGCNziD4VEtJa2etN8kxkXcaWgPuByLDko9sggY7yd4lKmznJ4EJ444cMrGN5bt2+v8AAvdXMkbdLoWKp9yOhUllLLxHeQhe+AfJWBn5CoRFcj6312i6pAf0/p9Ckx3l/wBU/MJ7zieig2kYCuWScU8SNS6dfsak3S92xUdxvdeWmUlCFg8wMKJwfDNVrq7X6NUW86a0cgxrNu9jKuCW+ySWxwLTKeHA8icDh5c1oWk2QK+fYJmV4aBZUNu91XqLWN81FHbUqNIkbrDn902NxJ+OM1im4rccAb+7Cu6Bz+OKdVRksW9MKKlLaEI3Eg8QBSAWZDcTLrm69z3geCfKnNbHc/RZTrJtK3ZaI53S4CAneUo8h5mstlOll7TdqIuUpkmx2YpdWCO6sg5bR/MQVHyBHhUJmtzLxd4+n7U2qVNluBoJR+Ik8B5eJ8BXYuzvRETQGjItljFLjyR2kl8DHbPH3lenIDyAp/GgDPOVG7Upooop5CKKKKEINUF9oLZMu5Nua00+wTOYTvT2GxxdQB/WgftJA4+IGenG/aMUIVDbI9T2+9bJ5luYc3ZtstrjUhpXA8VOKCk+KSFD0PDwpLcxJFuVvdiobzeSAQf6xPrSHa3stueirq/rjQu+xGUlft0Rkf1KVDCyE9WyDxT+HmOHJssuq4+qNPKdYkBEptTQejLSCpH3ieIPDKT4/Os/IjIc1w4tNROFEK3dpat2VaCEFZ7WRwBAPuDxqFO3FlnAkBxvPRSc/lUg2rXxhqTakMOBZ3pOHUYWgKACd3IPBQ5+VVguVJlSS9IWhWAAMDBOOppPIPmXok0toJ91PMjtaUuj0dTQkJiuKbOMKB3eY8xzphlREx5FpkxmS5EtqwsNNLCVFvsylJQSQDjIOMjOTTTedSTWJS2o7iMR2kqcedR2gQFEpSgI5Enz4caTWNTk3S0+3uP/AHbDqWW3HB7qSEq3TjpnkOmccqaxRbSD3UXuJpycrw0Tp+/SJiFN+1FyShLigVt4SkN5ION7KByPDOPGovY7e3M1Nbj7O2txpz2h5RGAUIG8d7oeO6PUil2sZTsq8/os9qqMlDZ7BngtxxWSMcDnGBw5VpipdtmkJUtCluS7sv2KIXN1Cg2knfPPGSrPX8IpitxXZRB2PzSe53Kfebgh9h9vsY2+hkPqUd/eVlSgRwSDgYHh61iJNwaTl61urA/EwtLg+QrTCeaA9nAU06jgWnBuqT8KVqJSklI7/TPCpRdSyIPKw7ey8kwYZd3crGLLenzmYMSDJcmyDutNOI7PeOMnvHgABxJp4VpfU6VEC0sulPMNzmyR88Un0yc6pQ66TiNDeeIzndJ3U/6mmeLl9kyHO27ZY31LDigXCe9ngePOnndXn0hxNfRKjp0VloTtLt94gQ3JM6zPtR2hlxxLjboQnxISonHnTKu723cUpHaO457iD+Zp2t61t6cv8lUoLZVB3Et+09qUKVkcQSd04OPnTZOed/RshClOYSyeZ7p4EYxUz1edoAIBtQHToiSQSKWt92UlbSE25TPbAlC33AlPDn/8UiZhmbdUsOyGXpCQQGyooTkjgEdSfOn68JWGLShJwrBxnjj7umxpptvThlbo7VDvaFeOKSl4DPyNZ0ufNkN8559k8zDihd5Rx7pyYQ5Ckw0rffdjOv8As7rDqt4trxwwrqP9DT9KtTT7LbRQhLYzvDdzmo63IXc7ww2lstRHpPtbbq8guBtI4BPTJ6mpJKmLaHaDBaT7w8ay5NVj3XkoaHbKPCyQvbkMogJTvK4EpBVj8qkzamoUdDAc4Dup4AfCmwNPXJYkNJSylIyF5940gddKXwHV9oArKuteuBk2J4VN0pOpQUElChxOc4phv+qGbfBUlvC5bmUobPHd6bx8vzrRdNWR7enDCEuEoIQjlx6E+A/OrQ2KbG5EmY1rXWDJU8oh6FDdTxz0dWnp+6n4npVmPi6jqeNlK0/7BdlLmmYJ1Tfmj+m56MtNuDvRm1cTnwWrr4Dh1NXTRRWuooooooQiiiihCKKKKEIICgQRkHpXPG1bYTJiTHdT6BbU06CXJFuZ4eZU0Oo8UfLwroeigi0LiKFqZi6gx7mVxZLaiVN5IC1cifI+I504C4FCXHFOE4G63wzkA9av3absPsevQ5cIhRar4ePtKE9x4+DiRz/iHH15VzPqCx6l2f3UW/UlvcSn+ye95t0eKF8lDy5jrikX4o5aglOFvfbfcu0iUgGO+8Gl8MgBKADn938qUR4kq0MONQm/bITzqXlN7+HU4x7pPBQwPI+tY6VWyqwtBt1DjmVLdCTxSoknBpeIRYUVQ3ewGclsjebP8vT4EUl4pjedK1WxB0YBTE+9GvuuvvyYzKlNrPb5ZVhCPdGccSrhw86S6gcZNw9iZeTJSoHBUjfcTxHu7vMkjmRnhxNSssmU32cuOytPn30n4EcKbcNsp3bfFYZCuJWEhAx6DifpTAy9uN1UcajymG8MK/QiDLZSFrfSlhJOVNjBKhnz8OlIEMyWMKYlvN+W9kfI0tvqP/NorCllxxtrfWs8OKjwAHQYFa801A0GPfulpnU/ZKrDeV2i6PP3JDstiRHVGWWkpC0gqBzjhnlSkStPBCUtXm4x0JGEpdhheB4ZApsNY4HhVpjadqVQe4b2nSbdLYzYZcG2SZM+TOcbU446x2aEpQc4+n1plkuXGUypClMhKuBSlGMj151vrLnXvht9ka3LRJEu4OJXNfCgkEJQjgB/3inzSqk+xpZI4NPutkeIICgPpTSeVeMyJkFxxcN5KA7grSpAUMjkR51VNDqZparIpdL9Tk/3xfZ3G1LScLDjgA8t3/4rOPLa7dT0gFRxkDoT6VH7a89NU9KluKekoUW95XJI8AOQpa9cmIrJ9oWACOAHP5UkYiAGd1CWTW8uClKJbLcYnd7FBJKQeGajd6vLHaCBbI/tU51e6A2ne7xPAcPePHkKz07YdW7S5ot1hiL9lQQHZK+402P319P4RkmumdmexmxbPGUy8C43pScLmuJxueIbT+EefM+PSrosSjqco2oTsi2B/o19nUms2kv3DIcYgLwpLJ6Kc6FXgnkOuTyvyiin14iiiihCKKKKEIooooQiiiihCKKKKEIpFdrPbr7bXLfdYTE2I6O808gKSfPyPmONLaKELnnWP2Z1MyF3HQtzVFcHeEKS4cDyQ7z+Cs+tVZcpWp9GSxC1XY5DCs4S6U7u/wCYUO4r4Gu2a0zIUW4RVxZkZmVHWMKaeQFoV6g8KqfEyT1BWMkcz0lcZDU1ulQHixJCXighLa+6rJ4Dn69K3MpBUhtJyOCR6Cr31L9nXQ19K3YcZ+yyFcd6Gv7vP/LVkfLFVtdPs0astKlL07qKLMbHJDpVHXj07yfqKUdhD9BTLcs/qCqV572y8zZX4VOFKf4RwH5Vlmn2bsj2kWMKS5peU+hP4o4S+D59wk1HZUO+29RTOsc2MRzDrC0fmKeaNIACTcS4krY4VhPcCVHzOKbnJskLKQhtKQvcK+JGa8XdVJBSWFJV5nlWtM4LtXsKY6lKKt/fBySrx5UEnsopfHSs9515Sz4DgKU5pPBt9/m4TCsk6UTw+6jrXn5CpRbtk+0u7lPYaZkxkq/FICWAP8ZB+lSQo8VUnenMNDBcBPgniat6zfZe1JPUld/v8OC2eJQwFPr9PwpHzNWfpn7POhdPqQ7Jhu3mQnjvzl7yM/8ALThPzzQvVy/pfTuqdVTnmdNWqTKDyhvuJR9236rPdTz6mrx0T9mOMw63P1pP9ve94woyiG/RbnAq9Bj1NX5GisQ4yI8ZhthlsYS20gISkeQHAVtryhdoSW22yDZ7e1Bt0RmHEZGEMsoCEp+ApVRRXqEUUUUIRRRRQhFFFFCF/9k=";
const CACHE_FRESH_DAYS = 45;
const DRAFT_KEY = "cazbid-draft-v2";
const PROFDRAFT_KEY = "cazbid-profdraft-v2";

const PLANS = [
  { id: "starter", name: "Starter", price: 49, limit: 3, blurb: "3 job applications / month" },
  { id: "pro", name: "Pro", price: 149, limit: 0, blurb: "Unlimited applications" },
];


// ===== TRADE-SPECIFIC ESTIMATING MODULES (routed by scope so each estimate only carries its trade) =====
const TRADE_BASE_RULES =
  "Build the takeoff as an expert in THIS trade. Include only components that belong to this trade/system; never pull in parts from an unrelated trade. Derive quantities from the measurements/dimensions given. A real takeoff is itemized (many lines), not a skeleton. Omit a component only if it genuinely does not apply. The items[] list is MATERIALS ONLY - do NOT put tool/equipment rentals (seamers, lifts, telehandlers, dumpsters go in equipment), labor, or day-rate lines in items[]; put rental/equipment dollars in the equipment field instead. Every item line must be a physical material with a real per-unit cost (no $0 placeholder lines, no lump-sum tear-off lines - tear-off is labor). " +
  "CRITICAL SYSTEM ISOLATION: the contractor's price book, material list, and production rates below contain entries for EVERY system and trade this company works in (asphalt shingle, standing seam, slate, flat membrane, steel panel, siding, etc.). Use ONLY the entries that belong to THIS job's identified system. Concrete example: on an ASPHALT SHINGLE roof, NEVER include metal panels, standing-seam panels, panel clips, seam/butyl sealant tape, or metal trim/coping lines - even though those entries sit right there in the price book - because they belong to a different roofing system. Pulling materials from the wrong system is the single most common estimating error; do not make it.\n";

const TRADE_MODULES = {
  roofing:
    "TRADE: ROOFING. First identify the roofing SYSTEM from the work type / description, then include ONLY that system's components:\n" +
    "ASPHALT SHINGLE: shingles, starter, hip/ridge cap shingles, synthetic underlayment, ice & water, drip edge, valley metal, STEP FLASHING + counter flashing at walls, corrugated/strip RIDGE VENT, pipe boots, roofing nails.\n" +
    "STANDING SEAM METAL: metal panels by square, concealed CLIPS + screws, butyl/seam SEALANT TAPE, eave/rake/gable TRIM, valley pan/flashing, hem/cleat, continuous metal RIDGE CAP with vented Z-closure (NOT shingle ridge-vent strips), headwall/sidewall PAN + counter flashing (NOT step flashing), pipe flashings, underlayment + high-temp ice & water. Do NOT include shingle ridge vent, step-flashing bundles, cap shingles, or starter strip. SNAP-LOCK panels (e.g. ABC LokSeam, most 1in nail-strip) are hand-seamed - DO NOT add a powered seamer or seamer rental. Only MECHANICAL-LOCK (double-lock) panels need a seamer, and that is EQUIPMENT, never a material line.\n" +
    "EXPOSED-FASTENER METAL PANEL: panels, exposed screws w/ washers, closure strips, ridge cap, rake/eave trim, sidewall/endwall flashing, butyl tape.\n" +
    "SLATE / NU-LOK: slate or Nu-Lok by square, BATTENS/counter-battens, copper or stainless nails/clips, copper/lead valley + flashing, slate/metal ridge, snow guards, high-temp underlayment - NOT asphalt step flashing or shingle ridge vent.\n" +
    "FLAT MEMBRANE (TPO/EPDM/BUR): membrane, insulation/ISO, coverboard, fasteners/plates or adhesive, term bar, edge metal, parapet/coping, pipe boots, seam tape/cover strip - no shingle or metal-panel parts.\n" +
    "Always: tear-off + dumpster if a re-roof; field material by squares incl. waste; perimeter/valley/ridge metal from matching LF; penetrations by count; fasteners + sealant. Labor: asphalt re-roof ~1.5-2.5 MH/sq; steep (8/12+), complex, tear-off, and specialty (slate/tile/standing seam) much higher - slate/Nu-Lok 6-12+ MH/sq.\n",
  siding:
    "TRADE: SIDING. Identify the siding type (vinyl, fiber cement/Hardie, wood/cedar lap, engineered wood, board & batten, steel/AG panel) and include only its components:\n" +
    "Field siding by square (incl. waste); starter strip; J-channel, outside/inside corner posts, undersill/finish trim (vinyl); for fiber cement: trim boards, joint flashing, blind-nail + face screws; for wood: building paper, corner boards, galvanized/SS nails; housewrap; window/door flashing tape + head flashing; soffit + fascia if in scope; caulk/sealant; fasteners appropriate to the product. Do NOT include roofing shingles, membrane, or roof flashing. Labor scales with stories, openings, and cut-up walls.\n",
  decks:
    "TRADE: DECKS. Include: footings/piers (count from span), posts, beams, ledger board + flashing + lag/structural screws, joists + hangers, rim/fascia, decking (PT, cedar, or composite) by sqft, hidden clips or deck screws, stair stringers/treads, railing posts/rails/balusters by LF, post caps. Add concrete for footings. Do NOT include roofing or siding parts. Labor scales with height off grade, stairs, and railing footage.\n",
  framing:
    "TRADE: FRAMING / STRUCTURAL. Include the right members for the scope: pressure-treated sill plates, studs/plates (walls), rafters or trusses + ridge/hangers (roof framing), joists + rim + hangers (floors), beams/LVL/headers, sheathing (wall/roof/subfloor) by sheet, structural connectors (Simpson), framing nails/screws, anchor bolts. Do NOT include finish materials, roofing, or siding. Labor by board-foot or per-member productivity.\n",
  exterior:
    "TRADE: EXTERIOR METAL (gutters / soffit / fascia / trim). Include: gutter by LF (size/profile), inside/outside corners, end caps, downspouts + elbows + straps (count), hangers/spikes-ferrules, gutter guard if specified; soffit panels + channel by LF/sqft; fascia/trim coil wrap by LF; flashing; fasteners + sealant. Labor scales with stories and linear footage.\n",
};

function tradeModuleFor(scope, desc) {
  const s = ((scope || "") + " " + (desc || "")).toLowerCase();
  if (/(roof|shingle|standing seam|metal panel|slate|nu-?lok|tpo|epdm|membrane|bur|flat roof|re-?roof)/.test(s)) return TRADE_MODULES.roofing;
  if (/(siding|vinyl|hardie|fiber cement|clapboard|cedar lap|board.?and.?batten|ag panel)/.test(s)) return TRADE_MODULES.siding;
  if (/(deck|railing|porch)/.test(s)) return TRADE_MODULES.decks;
  if (/(fram|truss|rafter|joist|stud|beam|lvl|sheathing|structural)/.test(s)) return TRADE_MODULES.framing;
  if (/(gutter|soffit|fascia|downspout|trim coil)/.test(s)) return TRADE_MODULES.exterior;
  // Tier 2: any other trade -> generic expert prompt that adapts to the named trade
  return "TRADE: " + (scope || desc || "the specified trade") + ". Act as an expert estimator in THIS specific trade. List every material/component this trade actually uses for the described scope, with realistic quantities from the dimensions. Use correct trade units and terminology. Do NOT include components from unrelated trades (no roofing parts on a plumbing job, etc.). If you are unsure of exact local specifics, give a sound professional estimate and note assumptions in the notes field.\n";
}

// ===== CAZA TRADE MANUALS — fetched on demand from a public URL (one per estimate) =====
// The full estimating manuals are hosted as raw files (e.g. GitHub raw). The artifact fetches
// ONLY the relevant trade's manual when building an estimate, so Sonnet gets Caza's pre-computed
// trade expertise without bloating the app. If the fetch fails for any reason, the estimate
// still runs on the inline tradeModuleFor() hint — so this NEVER breaks an estimate.
//
// SETUP: put the 12 manual .md files at this base URL (keep the exact filenames below), then
// set MANUAL_BASE_URL to your raw path. Example GitHub raw base (note the /main/ branch):
//   https://raw.githubusercontent.com/<your-username>/<your-repo>/main/
const MANUAL_BASE_URL = "https://raw.githubusercontent.com/cazacontractors-create/caza-manuals/refs/heads/main/";

const MANUAL_FILE_FOR_TRADE = {
  roofing:    "Caza_Roofing_Estimating_Manual.md",
  siding:     "Caza_Siding_Estimating_Manual.md",
  framing:    "Caza_Framing_Estimating_Manual.md",
  concrete:   "Caza_Concrete_Masonry_Manual.md",
  decks:      "Caza_Deck_Estimating_Manual.md",
  insulation: "Caza_Insulation_Thermal_Manual.md",
  interior:   "Caza_Interior_Finish_Painting_Manual.md",
  flooring:   "Caza_Flooring_Estimating_Manual.md",
  cabinetry:  "Caza_Cabinetry_Estimating_Manual.md",
  electrical: "Caza_Electrical_Estimating_Manual.md",
  hvac:       "Caza_HVAC_Estimating_Manual.md",
  plumbing:   "Caza_Plumbing_Estimating_Manual.md",
};

// scope/desc -> manual trade key (mirrors tradeModuleFor's routing, extended to all 12 trades)
function manualTradeKey(scope, desc) {
  const s = ((scope || "") + " " + (desc || "")).toLowerCase();
  if (/(roof|shingle|standing seam|metal panel|slate|nu-?lok|tpo|epdm|membrane|bur|flat roof|re-?roof|ridge|soffit|fascia|gutter|downspout)/.test(s)) return "roofing";
  if (/(siding|vinyl|hardie|fiber cement|clapboard|cedar lap|board.?and.?batten|ag panel|cladding|housewrap|wrb)/.test(s)) return "siding";
  if (/(fram|truss|rafter|joist|stud|beam|lvl|header|sheathing|structural|timber)/.test(s)) return "framing";
  if (/(concrete|masonry|foundation|footing|slab|cmu|block|brick|stone|veneer|paver|hardscape|retaining|flatwork|mortar)/.test(s)) return "concrete";
  if (/(deck|railing|guard|baluster|porch|composite deck|trex)/.test(s)) return "decks";
  if (/(insulat|spray foam|batt|blown.?in|cellulose|rigid board|r-?value|air seal|vapor barrier|thermal)/.test(s)) return "insulation";
  if (/(drywall|sheetrock|gypsum|joint compound|\bpaint|primer|interior finish|level 5)/.test(s)) return "interior";
  if (/(floor|tile|hardwood|engineered wood|lvp|lvt|vinyl plank|laminate|carpet|subfloor)/.test(s)) return "flooring";
  if (/(cabinet|countertop|vanity|built.?in|millwork|kitchen|quartz|granite top)/.test(s)) return "cabinetry";
  if (/(electric|wiring|circuit|breaker|outlet|receptacle|service upgrade|ev charger|generator|low.?voltage)/.test(s)) return "electrical";
  if (/(hvac|furnace|heat pump|mini.?split|ductwork|air condition|boiler|ventilat|erv|hrv|heating|cooling)/.test(s)) return "hvac";
  if (/(plumb|pipe|fixture|water heater|tankless|well|septic|dwv|drain|sump|water treatment|softener)/.test(s)) return "plumbing";
  return "";
}

// in-memory cache so we fetch each manual at most once per session
const __manualCache = {};

// Artifacts often can't fetch raw.githubusercontent.com directly (the browser's CORS check blocks
// the background request even though the URL opens fine in a tab). So we try several independent
// paths and take the first that returns real manual text. If all fail, the estimate still runs
// without the manual (graceful fallback). Built to maximize the odds one path connects.
function manualSourcesFor(fileUrl) {
  const enc = encodeURIComponent(fileUrl);
  return [
    fileUrl,                                                      // 1. direct
    "https://corsproxy.io/?url=" + enc,                           // 2. corsproxy.io
    "https://api.allorigins.win/raw?url=" + enc,                  // 3. allorigins raw
    "https://thingproxy.freeboard.io/fetch/" + fileUrl,           // 4. thingproxy
    "https://api.codetabs.com/v1/proxy/?quest=" + fileUrl,        // 5. codetabs
  ];
}

// Loose check: does this text look like one of our manuals? (proxies may alter encoding/wrap content,
// so don't require an exact literal — accept several signatures the manuals reliably contain.)
function looksLikeManual(txt) {
  if (!txt || txt.length < 800) return false;
  const t = txt.slice(0, 4000); // signatures live near the top
  if (t.indexOf("Caza") !== -1 && (t.indexOf("Estimating Manual") !== -1 || t.indexOf("Manual") !== -1)) return true;
  if (t.indexOf("Required Dimensions") !== -1 || t.indexOf("Required dimensions") !== -1) return true;
  if (t.indexOf("Labor / cost drivers") !== -1 || t.indexOf("Material list") !== -1 || t.indexOf("material list") !== -1) return true;
  if (t.indexOf("SCOPING") !== -1 || t.indexOf("BUILD format") !== -1) return true;
  return false;
}

async function fetchOneManual(fileUrl) {
  const sources = manualSourcesFor(fileUrl);
  for (let i = 0; i < sources.length; i++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);
    try {
      const res = await fetch(sources[i], { signal: ctrl.signal });
      clearTimeout(timer);
      if (res && res.ok) {
        let txt = await res.text();
        // some proxies wrap the body in JSON like {"contents":"..."} — unwrap if so
        if (txt && txt.charAt(0) === "{" && txt.indexOf("contents") !== -1) {
          try { const j = JSON.parse(txt); if (j && typeof j.contents === "string") txt = j.contents; } catch (e) {}
        }
        if (looksLikeManual(txt)) return txt;
      }
    } catch (e) {
      clearTimeout(timer);
      // try the next source
    }
  }
  return null;
}

async function fetchManual(scope, desc) {
  try {
    if (!MANUAL_BASE_URL || MANUAL_BASE_URL.indexOf("REPLACE_ME") !== -1) return null; // not configured yet
    const key = manualTradeKey(scope, desc);
    if (!key) return null;
    if (__manualCache[key] !== undefined) return __manualCache[key];
    const file = MANUAL_FILE_FOR_TRADE[key];
    if (!file) { __manualCache[key] = null; return null; }
    const txt = await fetchOneManual(MANUAL_BASE_URL + file);
    __manualCache[key] = txt || null;
    return __manualCache[key];
  } catch (e) {
    return null; // any failure -> estimate proceeds without the manual
  }
}

// ===== deterministic labor from the rate book (so labor never depends on the AI's mood) =====
// ===== parse EagleView measurement string into numbers =====
function parseMeas(dims) {
  const s = (dims || "").toLowerCase().replace(/,/g, "");
  const g = (re) => { const m = s.match(re); return m ? parseFloat(m[1]) : 0; };
  return {
    area: g(/([\d.]+)\s*sqft/),
    pitch: g(/([\d.]+)\s*\/\s*12/),
    eaves: g(/eaves?\s*([\d.]+)/),
    ridges: g(/ridges?\s*([\d.]+)/),
    hips: g(/hips?\s*([\d.]+)/),
    valleys: g(/valleys?\s*([\d.]+)/),
    rakes: g(/rakes?\s*([\d.]+)/),
    drip: g(/drip\s*edge\s*([\d.]+)/),
    flashing: g(/flashing\s*([\d.]+)/),
    stepflash: g(/step\s*flash(?:ing)?\s*([\d.]+)/),
    pens: g(/(\d+)\s*penetr/) || g(/penetrations?\s*(\d+)/),
  };
}
// ===== deterministic ROOF quantity takeoff from measurements (code does the math, not the AI) =====
// panelWidthIn = standing seam panel width in inches (e.g. 16). 0/undefined => not standing seam.
function computeRoofQuantities(dims, system, panelWidthIn) {
  const m = parseMeas(dims);
  if (!m.area) return null;
  const up = Math.ceil;
  const out = [];
  const sys = (system || "").toLowerCase();
  const eaveRake = (m.eaves + m.rakes) || (m.drip || 0);

  const isMetal = /standing seam|lok|snap.?lock|metal panel|steel panel|ag panel/.test(sys);
  if (isMetal) {
    const w = (panelWidthIn && panelWidthIn > 0) ? panelWidthIn : 16; // default 16"
    // waste scales with cut-up complexity: base 8% + extra driven by valley+hip footage (diagonal drop waste)
    const valleyHip = (m.valleys || 0) + (m.hips || 0);
    const wasteFactor = 1.08 + Math.min(0.22, 2.4 * (m.area > 0 ? valleyHip / m.area : 0));
    const panelLF = up((m.area / (w / 12)) * wasteFactor);
    out.push({ key: "panel", name: "Standing seam panels (" + w + "in)", qty: panelLF, unit: "LF" });
    // concealed clips: ~1 clip per 2 LF of panel run
    out.push({ key: "clip", name: "Concealed clips", qty: up(panelLF / 2), unit: "ea" });
  } else {
    out.push({ key: "field", name: "Field roofing", qty: up((m.area * 1.12) / 100), unit: "sq" });
  }
  if (m.eaves) out.push({ key: "starter", name: "Starter", qty: up((m.eaves * 1.10) / 100), unit: "bundle" });
  if (m.ridges + m.hips) out.push({ key: "ridge", name: "Hip/ridge cap", qty: up(((m.ridges + m.hips) * 1.10) / 30), unit: "bundle" });
  // Ice & water: metal/standing seam gets FULL-ROOF high-temp coverage; asphalt gets eaves/valleys only.
  if (isMetal) {
    // high-temp roll ~ 2 squares (200 sqft) coverage; cover whole roof + 10% lap/waste
    out.push({ key: "iw", name: "High-temp ice & water (full roof)", qty: up((m.area * 1.10) / 200), unit: "roll" });
  } else {
    const iwNum = (m.eaves * 2) + m.valleys + m.flashing + m.stepflash;
    if (iwNum) out.push({ key: "iw", name: "Ice & water", qty: up(iwNum / 66), unit: "roll" });
  }
  if (eaveRake) out.push({ key: "drip", name: "Drip edge (10ft)", qty: up((eaveRake * 1.15) / 10) * 10, unit: "LF" });
  if (m.valleys) out.push({ key: "valley", name: "Valley metal (10ft)", qty: up(m.valleys / 50) * 10, unit: "LF" });
  if (m.stepflash) out.push({ key: "step", name: "Step flashing", qty: up(m.stepflash / 25), unit: "bundle" });
  if (m.pens) out.push({ key: "pen", name: "Pipe boots / penetrations", qty: m.pens, unit: "ea" });
  return out;
}

function computeLaborFromRateBook(items, rateBook, estDims, scope, desc) {
  if (!Array.isArray(rateBook) || !rateBook.length) return null;
  const ctx = ((scope || "") + " " + (desc || "")).toLowerCase();
  // find a rate-book entry whose task name loosely matches any of the given keywords
  const findRate = (kws) => {
    for (let i = 0; i < rateBook.length; i++) {
      const t = (rateBook[i].task || "").toLowerCase();
      for (let j = 0; j < kws.length; j++) { if (t.indexOf(kws[j]) >= 0) return rateBook[i]; }
    }
    return null;
  };
  // pull a quantity (in the rate's unit) from the takeoff items by keyword + unit family
  const qtyFor = (nameKws, unitFamily) => {
    let q = 0;
    items.forEach((it) => {
      const nm = (it.name || "").toLowerCase();
      const un = (it.unit || "").toLowerCase();
      const nameHit = nameKws.some((k) => nm.indexOf(k) >= 0);
      if (!nameHit) return;
      if (unitFamily === "sq" && (un === "sq" || un.indexOf("square") >= 0)) q = Math.max(q, num(it.qty));
      else if (unitFamily === "lf" && (un === "lf" || un.indexOf("linear") >= 0)) q = Math.max(q, num(it.qty));
      else if (unitFamily === "ea" && (un === "ea" || un.indexOf("each") >= 0 || un === "pc" || un === "pcs")) q += num(it.qty);
    });
    return q;
  };
  // total squares on the job (for primary install + tear-off)
  let squares = 0;
  items.forEach((it) => { const un = (it.unit || "").toLowerCase(); if (un === "sq" || un.indexOf("square") >= 0) squares = Math.max(squares, num(it.qty)); });
  if (!squares && estDims) { const m = String(estDims).match(/([\d,]+(?:\.\d+)?)\s*sqft/i); if (m) squares = (num(String(m[1]).replace(/,/g, "")) || 0) / 100; }

  // difficulty multiplier from pitch + complexity (single combined factor, capped 1.5)
  let mult = 1.0;
  const dl = (estDims || "").toLowerCase();
  const pitchM = dl.match(/(\d{1,2})\/12/);
  const pitch = pitchM ? parseInt(pitchM[1], 10) : 0;
  if (pitch >= 10) mult = 1.45; else if (pitch >= 8) mult = 1.35; else if (pitch >= 6) mult = 1.2;
  if (dl.indexOf("complex") >= 0) mult = Math.min(1.5, mult + 0.1);
  if (mult > 1.5) mult = 1.5;

  let hours = 0; let matched = false;
  // 1) PRIMARY INSTALL (per square) — pick the rate matching the system
  let instRate = null;
  if (/standing seam|lok|snap.?lock|mechanical lock/.test(ctx)) instRate = findRate(["standing seam"]);
  else if (/slate|nu-?lok/.test(ctx)) instRate = findRate(["slate"]);
  else if (/shake/.test(ctx)) instRate = findRate(["shake"]);
  else if (/shingle|asphalt/.test(ctx)) instRate = findRate(["shingle install", "shingle"]);
  else if (/tpo/.test(ctx)) instRate = findRate(["tpo"]);
  else if (/epdm/.test(ctx)) instRate = findRate(["epdm"]);
  else if (/metal panel|exposed fastener|ag panel|steel panel/.test(ctx)) instRate = findRate(["steel panel", "ag panel"]);
  if (instRate && squares > 0) { hours += squares * num(instRate.rate) * mult; matched = true; }

  // 2) TEAR-OFF (per square, not multiplied by pitch difficulty)
  if (/tear|re-?roof|remove|layer/.test(ctx)) {
    const tr = findRate(["tear-off asphalt", "tear-off — shingles", "tear-off shingles", "tear-off"]);
    if (tr && squares > 0) { hours += squares * num(tr.rate); matched = true; }
  }
  // 3) PERIMETER / RIDGE / FLASHING metal by LF (not pitch-multiplied)
  const lfTasks = [
    { kws: ["drip edge", "perimeter metal", "eave", "rake"], rate: ["drip edge"] },
    { kws: ["ridge"], rate: ["ridge"] },
    { kws: ["gutter"], rate: ["gutter"] },
  ];
  lfTasks.forEach((lt) => {
    const q = qtyFor(lt.kws, "lf");
    const r = findRate(lt.rate);
    if (q > 0 && r) { hours += q * num(r.rate); matched = true; }
  });

  if (!matched || hours <= 0) return null;
  return { hours: Math.round(hours), mult: mult };
}

const rid = () => Math.random().toString(36).slice(2, 9);
const $0 = (n) => "$" + (Math.round(n) || 0).toLocaleString();
const num = (v) => { const n = parseFloat(v); return isNaN(n) ? 0 : n; };
const errMsg = (e) => {
  const m = (e && e.message) || "unknown error";
  if (m === "Failed to fetch") return "network/API error — check connection and retry";
  if (m.toLowerCase().includes("invalid response format")) return "the Claude app viewer is blocking the AI call — open the CazBid link in Safari instead and it works";
  return m;
};
const initials = (s) => (s || "?").trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
const fmtDate = (iso) => { try { return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" }); } catch (e) { return ""; } };

/* ---------- AI ---------- */
let __aiInFlight = 0;
let __aiLastCall = 0;
let __LAST_MANUAL_USED = null; // set from the server's response so the UI can show which manual loaded

async function callClaude(messages, opts) {
  const background = opts && opts.background;
  // background calls yield entirely if a foreground call is active or recent
  if (background) {
    if (__aiInFlight > 0) throw new Error("skip-background");
    if (Date.now() - __aiLastCall < 1500) throw new Error("skip-background");
  }
  // simple spacing so we never burst past the rate limit
  const since = Date.now() - __aiLastCall;
  if (since < 700) await new Promise((r) => setTimeout(r, 700 - since));
  __aiInFlight++;
  __aiLastCall = Date.now();
  try {
    return await __callClaudeInner(messages, opts);
  } finally {
    __aiInFlight--;
    __aiLastCall = Date.now();
  }
}
async function __callClaudeInner(messages, opts) {
  const body = { model: "claude-sonnet-4-20250514", max_tokens: (opts && opts.maxTokens) || 1000, messages };
  if (opts && opts.search) body.tools = [{ type: "web_search_20250305", name: "web_search", max_uses: 3 }];
  body.messages = body.messages.map((m) =>
    typeof m.content === "string" ? { ...m, content: [{ type: "text", text: m.content }] } : m
  );
  let lastErr;
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      let res;
      try {
        const __ctrl = new AbortController();
        const __to = setTimeout(() => __ctrl.abort(), 60000); // 60s hard cap so the estimate never hangs forever
        try {
          res = await fetch("/.netlify/functions/estimate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              prompt: body.messages,            // pass the full messages array
              maxTokens: body.max_tokens,
              search: !!body.tools,
              trade: (opts && opts.trade) || "" // which manual the server should load
            }),
            signal: __ctrl.signal,
          });
        } finally { clearTimeout(__to); }
      } catch (e) {
        if (e && e.name === "AbortError") throw new Error("Network: estimate timed out after 60s - try again");
        throw new Error("Network: " + (e.message || "fetch failed"));
      }
      const raw = await res.text();
      if (!raw || !raw.trim()) throw new Error("empty reply (connection dropped)");
      let data;
      try { data = JSON.parse(raw); } catch (e) { throw new Error("API status " + res.status + ", non-JSON reply"); }
      if (data && typeof data.manualUsed !== "undefined") __LAST_MANUAL_USED = data.manualUsed; // server tells us which manual it loaded
      if (data.error) {
        const msg = typeof data.error === "string" ? data.error : (data.error.message || JSON.stringify(data.error));
        throw new Error("API status " + res.status + ": " + String(msg).slice(0, 160));
      }
      if (!res.ok) throw new Error("API status " + res.status + (data && data.error ? ": " + data.error : ""));
      // our Netlify function returns { text: "..." }; fall back to raw Anthropic shape just in case
      if (typeof data.text === "string") return data.text;
      if (data.content && Array.isArray(data.content)) return data.content.filter((b) => b.type === "text").map((b) => b.text).join("\n");
      throw new Error("Unexpected response shape");
    } catch (e) {
      lastErr = e;
      const m = (e.message || "").toLowerCase();
      const retryable = m.includes("empty reply") || m.includes("network:") || m.includes("invalid response format") || m.includes("429") || m.includes("529") || m.includes("overloaded");
      if (attempt < 4 && retryable) { await new Promise((r) => setTimeout(r, 1200 * attempt)); continue; }
      throw e;
    }
  }
  throw lastErr;
}
// Long estimates run as a Netlify BACKGROUND function (15-min limit) plus polling,
// because Opus 4.8 + web search exceeds the 10-second sync-function limit on the
// free plan. We POST to estimate-background (which answers 202 and keeps working),
// then poll estimate-result until the takeoff lands in the Blobs job store.
async function callClaudeBackground(messages, opts) {
  opts = opts || {};
  const jobId = "job_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 9);
  const norm = (messages || []).map((m) =>
    typeof m.content === "string" ? { ...m, content: [{ type: "text", text: m.content }] } : m
  );
  let startRes;
  try {
    startRes = await fetch("/.netlify/functions/estimate-background", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobId, prompt: norm, maxTokens: opts.maxTokens || 4000, search: !!opts.search, trade: opts.trade || "" }),
    });
  } catch (e) {
    throw new Error("Network: couldn't start the estimate — check your connection and try again");
  }
  // background functions answer 202; anything else (and not ok) means it didn't start
  if (startRes.status !== 202 && !startRes.ok) {
    throw new Error("Couldn't start the estimate (status " + startRes.status + "). If this keeps happening the estimate-background function may not be deployed yet.");
  }
  const started = Date.now();
  const DEADLINE_MS = 4 * 60 * 1000; // give Opus + search up to 4 minutes
  let delay = 1500;
  let consecErrors = 0;     // consecutive failed polls
  let lastServerError = ""; // most recent error message the result fn reported
  while (Date.now() - started < DEADLINE_MS) {
    await new Promise((r) => setTimeout(r, delay));
    let r;
    try { r = await fetch("/.netlify/functions/estimate-result?job=" + encodeURIComponent(jobId)); }
    catch (e) {
      if (++consecErrors >= 8) throw new Error("Lost connection while waiting for the estimate — check your network and try again.");
      continue; // transient blip — keep polling
    }
    if (!r || !r.ok) {
      // a persistent error here means the result function itself is failing (e.g. Blobs not
      // configured) — capture the real message and surface it instead of spinning silently
      try { const ed = await r.json(); if (ed && ed.error) lastServerError = ed.error; } catch (e2) {}
      if (++consecErrors >= 6) throw new Error(lastServerError ? ("Estimate service error — " + lastServerError) : ("The estimate service returned an error (status " + (r ? r.status : "?") + ")."));
      delay = Math.min(delay + 500, 4000);
      continue;
    }
    let data;
    try { data = await r.json(); } catch (e) { if (++consecErrors >= 6) throw new Error("The estimate service returned an unreadable response."); continue; }
    consecErrors = 0; // clean response — reset the failure streak
    if (data.status === "done") { __LAST_MANUAL_USED = data.manualUsed; return data.text || ""; }
    if (data.status === "error") { throw new Error(data.error || "The estimate failed on the server"); }
    delay = Math.min(delay + 400, 4000); // still pending — back off gently and keep waiting
  }
  throw new Error("The estimate is taking unusually long — it may still finish; tap Build estimate again in a moment.");
}
function repairJSON(str) {
  let cut = str.lastIndexOf("}");
  while (cut > 0) {
    const head = str.slice(0, cut + 1);
    const stack = [];
    let inStr = false, esc = false;
    for (const ch of head) {
      if (esc) { esc = false; continue; }
      if (ch === "\\") { esc = true; continue; }
      if (ch === String.fromCharCode(34)) { inStr = !inStr; continue; }
      if (inStr) continue;
      if (ch === "{" || ch === "[") stack.push(ch);
      else if (ch === "}" || ch === "]") stack.pop();
    }
    const fixed = head + stack.reverse().map((c) => (c === "{" ? "}" : "]")).join("");
    try { return JSON.parse(fixed); } catch (e) { /* keep trimming */ }
    cut = str.lastIndexOf("}", cut - 1);
  }
  throw new Error("reply was cut off and could not be repaired - try again");
}
function parseJSON(text) {
  const clean = (text || "").replace(/```json|```/g, "").trim();
  const s = clean.search(/[\[{]/);
  if (s < 0) throw new Error("no JSON in response");
  const e = Math.max(clean.lastIndexOf("}"), clean.lastIndexOf("]"));
  try { return JSON.parse(clean.slice(s, e + 1)); }
  catch (err) { return repairJSON(clean.slice(s)); }
}
const readDataURL = (file) => new Promise((res, rej) => {
  const r = new FileReader();
  r.onload = () => res(r.result);
  r.onerror = () => rej(new Error("file read failed"));
  r.readAsDataURL(file);
});
const imageToJpeg = async (file, max = 900, q = 0.7) => {
  try {
    const bmp = await createImageBitmap(file);
    const scale = Math.min(1, max / Math.max(bmp.width, bmp.height));
    const cv = document.createElement("canvas");
    cv.width = Math.max(1, Math.round(bmp.width * scale));
    cv.height = Math.max(1, Math.round(bmp.height * scale));
    cv.getContext("2d").drawImage(bmp, 0, 0, cv.width, cv.height);
    if (bmp.close) bmp.close();
    return cv.toDataURL("image/jpeg", q);
  } catch (e) { /* fall through */ }
  const dataUrl = await readDataURL(file);
  return await new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => {
      try {
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        const cv = document.createElement("canvas");
        cv.width = Math.max(1, Math.round(img.width * scale));
        cv.height = Math.max(1, Math.round(img.height * scale));
        cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
        res(cv.toDataURL("image/jpeg", q));
      } catch (err) { rej(err); }
    };
    img.onerror = () => rej(new Error("decode failed"));
    img.src = dataUrl;
  });
};
const dataUrlResize = (dataUrl, max, q) => new Promise((res, rej) => {
  const img = new Image();
  img.onload = () => {
    try {
      const scale = Math.min(1, max / Math.max(img.width, img.height));
      const cv = document.createElement("canvas");
      cv.width = Math.max(1, Math.round(img.width * scale));
      cv.height = Math.max(1, Math.round(img.height * scale));
      cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
      res(cv.toDataURL("image/jpeg", q));
    } catch (e) { rej(e); }
  };
  img.onerror = () => rej(new Error("decode failed"));
  img.src = dataUrl;
});

/* ---------- shared storage ---------- */
async function sGet(key) {
  try { const r = await window.storage.get(key, true); return r && r.value ? JSON.parse(r.value) : null; }
  catch (e) { return null; }
}
async function sSet(key, val) {
  let last;
  for (let a = 1; a <= 5; a++) {
    try { await window.storage.set(key, JSON.stringify(val), true); return; }
    catch (e) {
      last = e;
      const rate = /rate limit/i.test((e && e.message) || "");
      await new Promise((r) => setTimeout(r, (rate ? 1400 : 600) * a));
    }
  }
  throw new Error("storage kept failing - check connection and try again (" + ((last && last.message) || "server error") + ")");
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function pGet(key) {
  try { const r = await window.storage.get(key); return r && r.value ? JSON.parse(r.value) : null; }
  catch (e) { return null; }
}
async function pSet(key, val) {
  try { await window.storage.set(key, JSON.stringify(val)); } catch (e) { /* best effort */ }
}

/* ---------- small components ---------- */
function Avatar({ user, size, onTap }) {
  const cls = "avatar" + (size === "lg" ? " lg" : "") + (size === "xl" ? " xl" : "");
  const inner = user && user.avatar
    ? <img src={user.avatar} alt="" />
    : <span className="avinit">{initials(user ? (user.company || user.name) : "?")}</span>;
  if (onTap) {
    return (
      <button className={cls + " avbtn"} onClick={onTap}>
        {inner}
        <span className="avcam"><Camera size={14} /></span>
      </button>
    );
  }
  return <span className={cls}>{inner}</span>;
}
function Stars({ value }) {
  return (
    <span className="starline">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={14} className={n <= value ? "stf" : "ste"} />
      ))}
    </span>
  );
}
function Pill({ kind, children }) {
  return <span className={"pill " + kind}>{children}</span>;
}
function RateBox({ label, onSubmit, busyKey, busy }) {
  const [st, setSt] = useState(0);
  const [cm, setCm] = useState("");
  return (
    <div className="ratebox">
      <div className="rblabel">{label}</div>
      <div className="starsrow">
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} className={"starbtn" + (st >= n ? " on" : "")} onClick={() => setSt(n)}>★</button>
        ))}
      </div>
      <input className="in" placeholder="Say a few words (shows on their profile)" value={cm} onChange={(e) => setCm(e.target.value)} />
      <button className="btn ghost full" disabled={!st || busy === busyKey} onClick={() => onSubmit(st, cm)}>
        {busy === busyKey ? "Sending…" : "Submit rating"}
      </button>
    </div>
  );
}
function Mascot({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="CazBid helper" role="img">
      <circle cx="50" cy="50" r="50" fill="#FFF1E8" />
      <path d="M16 44 L50 24 L84 44 Z" fill="none" stroke="#15181C" strokeWidth="4" strokeLinejoin="round" />
      <path d="M50 24 L84 44 L80 47 L50 29 Z" fill="#FF6A13" />
      <circle cx="50" cy="60" r="14" fill="#fff" stroke="#15181C" strokeWidth="3.5" />
      <path d="M37 55 Q50 43 63 55 Z" fill="#FF6A13" stroke="#15181C" strokeWidth="3" strokeLinejoin="round" />
      <path d="M34 55 L40 55" stroke="#15181C" strokeWidth="3" strokeLinecap="round" />
      <circle cx="45" cy="60" r="1.8" fill="#15181C" />
      <circle cx="55" cy="60" r="1.8" fill="#15181C" />
      <path d="M44 65 Q50 70 56 65" fill="none" stroke="#15181C" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M40 64 L30 47" stroke="#15181C" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M60 64 L70 47" stroke="#15181C" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
function Party({ data, onClose }) {
  const pieces = useMemo(() => {
    const colors = ["#FF6A13", "#2E7D4F", "#1B1F23", "#FFC53D", "#3B82F6", "#EC4899"];
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.9,
      dur: 2.4 + Math.random() * 1.6,
      size: 7 + Math.random() * 8,
      color: colors[i % colors.length],
      rot: Math.random() > 0.5 ? 1 : -1,
    }));
  }, []);
  useEffect(() => {
    const t = setTimeout(onClose, 4500);
    return () => clearTimeout(t);
  }, []); // eslint-disable-line
  return (
    <div className="party" onClick={onClose}>
      {pieces.map((p) => (
        <span key={p.id} className="confetti" style={{
          left: p.left + "%", width: p.size, height: p.size * 0.45, background: p.color,
          animationDelay: p.delay + "s", animationDuration: p.dur + "s",
          ["--rot"]: (p.rot * 720) + "deg",
        }} />
      ))}
      <div className="partycard">
        <PartyPopper size={44} color="#FF6A13" />
        <div className="partytitle">{data.title}</div>
        {data.sub && <div className="partysub">{data.sub}</div>}
        <div className="partyhint">tap anywhere to continue</div>
      </div>
    </div>
  );
}

/* ============================================================ */
function App() {
  const [me, setMe] = useState({ uidH: "", uidC: "", role: "", plan: "", passed: [], mine: [], cele: null, readMsgs: {}, seenAt: 0 });
  const [profH, setProfH] = useState({ name: "", contact: "", town: "", address: "", bio: "", avatar: "" });
  const [profC, setProfC] = useState({ name: "", company: "", trades: "", town: "", base: "", radius: 30, bio: "", prefMaterials: "", avatar: "", posts: [] });
  const [tab, setTab] = useState("post");
  const [toast, setToast] = useState("");
  const [busy, setBusy] = useState("");
  const [board, setBoard] = useState([]);
  const [users, setUsers] = useState({});
  const [pros, setPros] = useState([]);
  const [viewing, setViewing] = useState(null);
  const [viewPosts, setViewPosts] = useState([]);
  const [chatJob, setChatJob] = useState(null);
  const [chatMsgs, setChatMsgs] = useState([]);
  const [chatText, setChatText] = useState("");
  const [party, setParty] = useState(null);
  const [unread, setUnread] = useState({});
  const loaded = useRef(false);
  const lastArchive = useRef(0);
  const meTimer = useRef(null);
  const draftTimer = useRef(null);
  const profTimer = useRef(null);
  const chatEnd = useRef(null);

  /* homeowner job draft */
  const [desc, setDesc] = useState("");
  const [photos, setPhotos] = useState([]);
  const [roofDims, setRoofDims] = useState("");
  const [roofOpen, setRoofOpen] = useState(false);
  const [pasteOpen, setPasteOpen] = useState(false);
  const [pasteText, setPasteText] = useState("");
  const [bidPreview, setBidPreview] = useState(null);
  const [jobAddr, setJobAddr] = useState("");
  const [sameAddr, setSameAddr] = useState(true);
  const [addrPublic, setAddrPublic] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [diag, setDiag] = useState("");
  const [bidPrices, setBidPrices] = useState({});
  const [bidOverride, setBidOverride] = useState({});
  const [radiusOn, setRadiusOn] = useState(true);
  const [archived, setArchived] = useState([]);
  const [priceLib, setPriceLib] = useState([]);
  const [costCache, setCostCache] = useState({});
  const [matCosts, setMatCosts] = useState([]); // [{name, unit, cost}] from contractor CSV
  const [priceBook, setPriceBook] = useState(SEED_PRICES);
  const [rateBook, setRateBook] = useState(SEED_RATES);
  const [estDimRows, setEstDimRows] = useState([]); // [{id,label,value,unit}]
  const [bookOpen, setBookOpen] = useState("");
  const [measOpen, setMeasOpen] = useState("");
  const [estScope, setEstScope] = useState(null); // selected subcategory label (string)
  const [estDimVals, setEstDimVals] = useState({}); // {key: value}
  const [estGreeted, setEstGreeted] = useState(false);
  const [estTyping, setEstTyping] = useState(false);
  const [estTyped, setEstTyped] = useState(""); // characters revealed so far
  const [estCat, setEstCat] = useState(null); // chosen top-level category
  const [estOpenDesc, setEstOpenDesc] = useState(""); // opening free-text box
  const [estCustomType, setEstCustomType] = useState(""); // typed custom work type
  const estGreetRef = useRef(false);
  const estFirst = ((profC.name || "").trim().split(/\s+/)[0] || "");
  const EST_GREETING = (estFirst ? "Hey " + estFirst + "! " : "Hey! ") + "What are we pricing today? Pick the type of work below, or just tell me what you're looking at — I've seen worse, probably.";
  const [matCostBusy, setMatCostBusy] = useState(false);
  const [svcPrompt, setSvcPrompt] = useState(null); // {name, url} when showing the pre-link instructions
  const [appDist, setAppDist] = useState({});
  const [jobView, setJobView] = useState("active");
  const [inRange, setInRange] = useState(null);
  const [matLists, setMatLists] = useState({});
  const [matBusy, setMatBusy] = useState("");
  const [confirmDel, setConfirmDel] = useState("");
  const [editJob, setEditJob] = useState(null);
  const [editText, setEditText] = useState("");
  const [privacyOk, setPrivacyOk] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifs, setNotifs] = useState([]);
  const [answers, setAnswers] = useState({});
  const [priorQA, setPriorQA] = useState([]); // accumulated {q,a} from earlier question rounds
  // ---- contractor Pro estimator ----
  const [estDesc, setEstDesc] = useState("");
  const [estPhotos, setEstPhotos] = useState([]);
  const [estDims, setEstDims] = useState("");
  const [estPanelW, setEstPanelW] = useState(16); // standing seam panel width (in) for deterministic panel LF
  const [estBusy, setEstBusy] = useState("");
  const [estResult, setEstResult] = useState(null); // {trade, items:[{name,qty,unit,cost}], laborHours, laborRate, equipment, taxRate, days, crew, notes}
  const [estMargin, setEstMargin] = useState(30);
  const [estSvcPrompt, setEstSvcPrompt] = useState(null);
  // ---- homeowner conversational estimate ----
  const [convMsgs, setConvMsgs] = useState([]); // [{role:"ai"|"me", text}]
  const [convInput, setConvInput] = useState("");
  const [convStarted, setConvStarted] = useState(false);
  const [convBusy, setConvBusy] = useState(false);
  const [convBid, setConvBid] = useState(null); // live {priceLow, priceHigh, days, confidence, primaryOptions, cost...}
  const [convFacts, setConvFacts] = useState([]); // accumulated confirmed details
  const [convDone, setConvDone] = useState(false);
  const [convPhotos, setConvPhotos] = useState([]);
  const [convOptions, setConvOptions] = useState([]); // clickable choices for the latest AI question
  const [convConfirmReset, setConvConfirmReset] = useState(false);
  const [convReportOpen, setConvReportOpen] = useState(false);
  const convEndRef = useRef(null);
  const convGreeting = useRef(false);

  const flash = (m) => { setToast(m); setTimeout(() => setToast(""), 6000); };
  const goTab = (k) => { setTab(k); setViewing(null); setChatJob(null); window.scrollTo(0, 0); };
  const shareApp = async () => {
    const url = (typeof window !== "undefined" && window.location && window.location.href) || "";
    const data = { title: "CazBid", text: "Check out CazBid — snap a photo of a home project, get an instant price, and pick a local contractor. (Open in Safari for the best experience.)", url };
    try {
      if (navigator.share) { await navigator.share(data); return; }
      await navigator.clipboard.writeText(url);
      flash("Link copied — paste it into a text to share CazBid.");
    } catch (e) {
      flash("Share this link: " + url);
    }
  };
  const sendFeedback = () => {
    const body = encodeURIComponent("What I liked:\n\nWhat confused me:\n\nWhat I'd want next:\n\n(Feel free to write however you like!)");
    window.open("mailto:?subject=" + encodeURIComponent("CazBid feedback") + "&body=" + body, "_blank");
  };

  /* ----- boot ----- */
  useEffect(() => {
    (async () => {
      let m = { uidH: "h" + rid(), uidC: "c" + rid(), role: "", plan: "", passed: [], mine: [], cele: null, readMsgs: {}, seenAt: 0 };
      const r = await pGet(ME_KEY);
      if (r) m = { ...m, ...r };
      setMe(m);
      const ph = await sGet(USER_KEY(m.uidH));
      if (ph) setProfH((p) => ({ ...p, ...ph }));
      const pc = await sGet(USER_KEY(m.uidC));
      if (pc) {
        const posts = [];
        for (const meta of pc.posts || []) {
          let photo = meta.photo || "";
          if (!photo) {
            try { const rec = await sGet(POST_KEY(m.uidC, meta.id)); photo = (rec && rec.photo) || ""; } catch (e) { /* skip */ }
          }
          posts.push({ id: meta.id, caption: meta.caption, at: meta.at, photo, uploaded: true });
        }
        setProfC((p) => ({ ...p, ...pc, posts }));
      }
      const pd = await pGet(PROFDRAFT_KEY);
      if (pd) {
        if (pd.h) setProfH((p) => ({ ...p, ...pd.h }));
        if (pd.c) setProfC((p) => ({ ...p, ...pd.c, posts: p.posts }));
      }
      const jd = await pGet(DRAFT_KEY);
      if (jd) { setDesc(jd.desc || ""); setRoofDims(jd.roofDims || ""); }
      if (m.role === "contractor") setTab("feed");
      const arch = await pGet(ARCHIVE_KEY);
      if (arch && Array.isArray(arch)) setArchived(arch);
      const plib = await pGet(PRICELIB_KEY);
      if (plib && Array.isArray(plib)) setPriceLib(plib);
      const cc = await pGet(COSTCACHE_KEY);
      if (cc && typeof cc === "object") setCostCache(cc);
      const mcz = await pGet(MATCOST_KEY);
      if (mcz && Array.isArray(mcz)) setMatCosts(mcz);
      const pbz = await pGet(PRICEBOOK_KEY);
      if (pbz && Array.isArray(pbz) && pbz.length) setPriceBook(pbz);
      const rbz = await pGet(RATEBOOK_KEY);
      if (rbz && Array.isArray(rbz) && rbz.length) setRateBook(rbz);
      loaded.current = true;
      setTimeout(() => seedDemo(), 2500);
    })();
  }, []);
  // styled placeholder "photo" for a demo work-feed post (no real image generation in prototype) — an SVG data URL
  const demoPhoto = (label, hue) => {
    const svg = "<svg xmlns='http://www.w3.org/2000/svg' width='480' height='360'>" +
      "<rect width='480' height='360' fill='hsl(" + hue + ",18%,88%)'/>" +
      "<rect y='250' width='480' height='110' fill='hsl(" + hue + ",22%,62%)'/>" +
      "<polygon points='0,250 240,150 480,250' fill='hsl(" + hue + ",30%,46%)'/>" +
      "<text x='240' y='325' font-family='Arial' font-size='22' fill='#15181C' text-anchor='middle' font-weight='bold'>" + label + "</text>" +
      "</svg>";
    return "data:image/svg+xml;base64," + btoa(svg);
  };
  const makeDemoContractors = (place) => {
    const here = place || "North Country";
    // pick a nearby-sounding regional descriptor; fall back gracefully
    const co1 = (here + " Roofing & Metal").replace(/\s+/g, " ").trim();
    const co2 = (here + " Exteriors").replace(/\s+/g, " ").trim();
    const co3 = (here + " Home Pros").replace(/\s+/g, " ").trim();
    const t = (here + ", NY");
    const ago = (d) => new Date(Date.now() - d).toISOString();
    return [
      { uid: "demo-co-1", company: co1, trades: "Roofing, metal roofs", town: t, base: t, radius: 40,
        bio: "Family-run, fully insured, 20+ years in the " + here + " area. Standing seam and shingle specialists.",
        posts: [
          { id: "dp1a", photo: demoPhoto("Standing seam metal", 210), caption: "Standing seam install we wrapped up near " + here + " — 26ga, hidden fasteners.", at: ago(7e8) },
          { id: "dp1b", photo: demoPhoto("Architectural shingle", 30), caption: "Full tear-off and reshingle, GAF Timberline HDZ. Clean site at the end of every day.", at: ago(16e8) },
        ],
        seedReviews: [{ stars: 5, comment: "Crew was fast and clean. Roof looks great.", at: ago(9e8) }, { stars: 5, comment: "Fair price, no surprises.", at: ago(2e9) }] },
      { uid: "demo-co-2", company: co2, trades: "Siding, windows, decks", town: t, base: t, radius: 45,
        bio: "Exterior remodels done right in " + here + ". James Hardie certified. We show up on time.",
        posts: [
          { id: "dp2a", photo: demoPhoto("James Hardie siding", 140), caption: "Hardie board refresh on a two-story — color is Iron Gray. Big curb-appeal jump.", at: ago(11e8) },
          { id: "dp2b", photo: demoPhoto("Composite deck", 25), caption: "12x16 composite deck with black aluminum rail. Built to last.", at: ago(19e8) },
        ],
        seedReviews: [{ stars: 4, comment: "Good work, showed up when they said they would.", at: ago(12e8) }] },
      { uid: "demo-co-3", company: co3, trades: "Roofing, siding, gutters", town: t, base: t, radius: 35,
        bio: "Local " + here + " crew, no subs. Free estimates, written warranties.",
        posts: [
          { id: "dp3a", photo: demoPhoto("Seamless gutters", 200), caption: "Seamless aluminum gutters, 6\" K-style, on a farmhouse. Leaf guard included.", at: ago(6e8) },
        ],
        seedReviews: [{ stars: 5, comment: "Honest and professional. Highly recommend.", at: ago(6e8) }, { stars: 5, comment: "Did exactly what was quoted.", at: ago(15e8) }] },
    ];
  };
  const seedDemo = async () => {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const seed = (await sGet(SEED_KEY)) || { day: "", contractorsDone: false };
      // 1) Seed a few AI contractors once (only if the user index is thin)
      const uidx = (await sGet(USER_INDEX)) || [];
      if (!seed.contractorsDone || uidx.length < 3) {
        // derive a local-sounding area from the tester's own town so demo pros feel local
        const rawTown = (profH.town || profC.base || profC.town || "").trim();
        const place = rawTown ? rawTown.split(",")[0].trim() : "";
        const demoCos = makeDemoContractors(place);
        for (const c of demoCos) {
          await sSet(USER_KEY(c.uid), { ...c, role: "contractor", avatar: "", thumb: "", demo: true,
            seedReviews: c.seedReviews || [], updatedAt: new Date().toISOString() });
        }
        const merged = [...new Set([...demoCos.map((c) => c.uid), ...uidx])].slice(0, 100);
        await sSet(USER_INDEX, merged);
        seed.contractorsDone = true;
      }
      // 2) Seed one fresh demo job per day
      if (seed.day !== today) {
        const samples = [
          { title: "Asphalt shingle reroof — ranch", desc: "Tear off one layer and reshingle my single-story ranch, about 1,700 sqft. A few spots feel soft near the bathroom vent.", town: "Turin, NY", lo: 9500, hi: 13500 },
          { title: "Vinyl siding refresh", desc: "Replace faded vinyl siding on a two-story, plus wrap two windows. House is roughly 24x40.", town: "Port Leyden, NY", lo: 14000, hi: 19000 },
          { title: "Composite back deck", desc: "Build a 12x16 composite deck off the kitchen door, about 3 ft off grade, with stairs and railing.", town: "Constableville, NY", lo: 11000, hi: 16000 },
          { title: "Metal roof over porch", desc: "Standing seam metal roof on a covered front porch, low slope, about 300 sqft.", town: "Glenfield, NY", lo: 4500, hi: 7000 },
          { title: "Gutter replacement", desc: "Replace all gutters and downspouts on a 1.5 story farmhouse, seamless aluminum.", town: "Lyons Falls, NY", lo: 1800, hi: 3200 },
        ];
        const pick = samples[Math.floor(Math.random() * samples.length)];
        const jid = "demo-job-" + today.replace(/-/g, "");
        const existing = await sGet(JOB_KEY(jid));
        if (!existing) {
          const price = Math.round((pick.lo + pick.hi) / 2);
          const demoHomeowners = [
            { uid: "demo-ho-1", name: "Karen M.", bio: "Homeowner in " + pick.town + ". Looking for reliable local pros." },
            { uid: "demo-ho-2", name: "Dave R.", bio: "Fixing up our place room by room. Value good communication." },
            { uid: "demo-ho-3", name: "The Whitakers", bio: "Recently bought an older home — lots of projects ahead!" },
          ];
          const dho = demoHomeowners[Math.floor(Math.random() * demoHomeowners.length)];
          const job = {
            id: jid, createdAt: new Date().toISOString(), status: "open",
            homeownerUid: dho.uid, homeownerName: dho.name, contact: "(demo)", town: pick.town, address: "",
            desc: pick.desc, roofDims: "", photos: [],
            title: pick.title, summary: pick.desc, includes: [], priceLow: pick.lo, priceHigh: pick.hi,
            days: 2, mh: 24, note: "Demo job for testing.", price, applicants: [], chosen: null, demo: true,
          };
          await sSet(JOB_KEY(jid), job);
          const jidx = (await sGet(JOB_INDEX)) || [];
          await sSet(JOB_INDEX, [jid, ...jidx.filter((x) => x !== jid)].slice(0, 120));
          await sSet(USER_KEY(dho.uid), { uid: dho.uid, role: "homeowner", name: dho.name, town: pick.town, bio: dho.bio, demo: true, updatedAt: new Date().toISOString() });
        }
        seed.day = today;
      }
      await sSet(SEED_KEY, seed);
    } catch (e) { /* seeding is best-effort */ }
  };

  /* ----- autosave: me / job draft / profile drafts ----- */
  useEffect(() => {
    if (!loaded.current) return;
    clearTimeout(meTimer.current);
    meTimer.current = setTimeout(() => pSet(ME_KEY, me), 500);
  }, [me]);
  useEffect(() => {
    if (!loaded.current) return;
    clearTimeout(draftTimer.current);
    draftTimer.current = setTimeout(() => pSet(DRAFT_KEY, { desc, roofDims }), 800);
  }, [desc, roofDims]);
  useEffect(() => {
    if (!loaded.current) return;
    clearTimeout(profTimer.current);
    profTimer.current = setTimeout(() => pSet(PROFDRAFT_KEY, {
      h: profH,
      c: { name: profC.name, company: profC.company, trades: profC.trades, town: profC.town, base: profC.base, radius: profC.radius, bio: profC.bio, prefMaterials: profC.prefMaterials, avatar: profC.avatar },
    }), 800);
  }, [profH, profC.name, profC.company, profC.trades, profC.town, profC.base, profC.radius, profC.bio, profC.avatar]); // eslint-disable-line

  /* ----- profiles ----- */
  const saveProfileQuiet = async (role) => {
    const uid = role === "contractor" ? me.uidC : me.uidH;
    let rec;
    if (role === "homeowner") {
      rec = { uid, role, ...profH, updatedAt: new Date().toISOString() };
    } else {
      const uploadedIds = [];
      for (const po of profC.posts) {
        if (po.photo && !po.uploaded) {
          let small = po.photo;
          try { small = await dataUrlResize(po.photo, 480, 0.5); } catch (e) { /* keep original */ }
          await sSet(POST_KEY(uid, po.id), { photo: small });
          uploadedIds.push(po.id);
          await sleep(400); // stay under the storage rate limit
        }
      }
      if (uploadedIds.length) {
        setProfC((pc) => ({ ...pc, posts: pc.posts.map((x) => uploadedIds.includes(x.id) ? { ...x, uploaded: true } : x) }));
      }
      try {
        const prev = await sGet(USER_KEY(uid));
        const keep = new Set(profC.posts.map((x) => x.id));
        for (const old of (prev && prev.posts) || []) {
          if (!keep.has(old.id)) { try { await window.storage.delete(POST_KEY(uid, old.id), true); } catch (e) { /* gone */ } }
        }
      } catch (e) { /* best effort */ }
      let thumb = "";
      if (profC.posts[0] && profC.posts[0].photo) {
        try { thumb = await dataUrlResize(profC.posts[0].photo, 180, 0.5); } catch (e) { /* no thumb */ }
      }
      rec = {
        uid, role, name: profC.name, company: profC.company, trades: profC.trades, town: profC.town,
        base: profC.base, radius: profC.radius,
        bio: profC.bio, prefMaterials: profC.prefMaterials, avatar: profC.avatar, thumb,
        posts: profC.posts.map((x) => ({ id: x.id, caption: x.caption, at: x.at })),
        updatedAt: new Date().toISOString(),
      };
    }
    await sSet(USER_KEY(uid), rec);
    const idx = (await sGet(USER_INDEX)) || [];
    if (!idx.includes(uid)) await sSet(USER_INDEX, [uid, ...idx].slice(0, 100));
    setUsers((u) => ({ ...u, [uid]: rec }));
    if (role === "contractor") setProfC((p) => ({ ...p, posts: p.posts.map((x) => ({ ...x, uploaded: true })) }));
  };
  const saveProfile = async (role) => {
    setBusy("prof");
    try {
      if (role === "contractor" && !profC.company.trim()) throw new Error("add your company name");
      if (role === "homeowner" && !profH.name.trim()) throw new Error("add your name");
      if (role === "homeowner" && !profH.contact.trim()) throw new Error("add a phone or email");
      if (role === "homeowner" && !profH.address.trim()) throw new Error("add your home address");
      await saveProfileQuiet(role);
      if (role === "homeowner") { flash("Profile saved ✓ Let's get your project priced."); goTab("chat"); }
      else { flash("Profile saved ✓ Now check the Job Feed for work."); goTab("feed"); }
    } catch (e) { flash("Profile save failed: " + errMsg(e)); }
    setBusy("");
  };
  const setAvatar = async (role, file) => {
    if (!file) return;
    try {
      const img = await imageToJpeg(file, 256, 0.6);
      role === "contractor" ? setProfC({ ...profC, avatar: img }) : setProfH({ ...profH, avatar: img });
    } catch (e) { flash("Couldn't read that photo: " + errMsg(e)); }
  };
  const addPost = async (file, caption) => {
    if (!file) return;
    try {
      const img = await imageToJpeg(file, 480, 0.5);
      setProfC((p) => ({ ...p, posts: [{ id: rid(), photo: img, caption: (caption || "").slice(0, 120), at: new Date().toISOString() }, ...p.posts].slice(0, 6) }));
      flash("Post added — hit Save profile to publish it.");
    } catch (e) { flash("Couldn't read that photo: " + errMsg(e)); }
  };

  /* ----- board + celebrations ----- */
  const detectCelebrations = (jobs) => {
    setMe((m) => {
      const first = !m.cele;
      const cele = m.cele || { apps: {}, wins: [] };
      const apps = { ...cele.apps };
      const wins = [...cele.wins];
      let fire = null;
      for (const j of jobs) {
        if (j.homeownerUid === m.uidH) {
          const n = (j.applicants || []).length;
          if (!first && m.role === "homeowner" && j.status === "open" && n > (apps[j.id] || 0)) {
            fire = fire || { title: "A pro wants your job!", sub: j.title + " — review them under My Jobs" };
          }
          apps[j.id] = n;
        }
        if (j.chosen === m.uidC && !wins.includes(j.id)) {
          if (!first && m.role === "contractor") {
            fire = fire || { title: "You got the job!", sub: (j.homeownerName ? j.homeownerName + " hired you — " : "") + j.title };
          }
          wins.push(j.id);
        }
      }
      if (fire) setTimeout(() => setParty(fire), 250);
      return { ...m, cele: { apps, wins } };
    });
  };
  const buildNotifs = async (jobs) => {
    const list = [];
    const isHO = me.role === "homeowner";
    const isCO = me.role === "contractor";
    for (const j of jobs) {
      const t = (d) => { try { return new Date(d).getTime(); } catch (e) { return 0; } };
      // contractor: new open jobs in the feed
      if (isCO && j.status === "open" && j.homeownerUid !== me.uidH && !me.passed.includes(j.id)) {
        list.push({ id: "new-" + j.id, at: t(j.createdAt), icon: "job", text: "New job posted: " + j.title, jobId: j.id });
      }
      // homeowner: someone applied to my open job
      if (isHO && j.homeownerUid === me.uidH) {
        for (const a of j.applicants || []) {
          const u = users[a.uid];
          list.push({ id: "app-" + j.id + a.uid, at: t(a.at), icon: "bid", text: (u ? u.company : a.company) + " wants \"" + j.title + "\" — " + $0(a.bid || j.price), jobId: j.id });
        }
      }
      // contractor: I got hired (accepted bid)
      if (isCO && j.chosen === me.uidC) {
        list.push({ id: "hired-" + j.id, at: t(j.matchedAt || j.createdAt), icon: "hired", text: "You were hired for: " + j.title, jobId: j.id });
      }
      // homeowner: I hired someone (matched)
      if (isHO && j.homeownerUid === me.uidH && j.status === "matched" && j.chosen) {
        const u = users[j.chosen];
        list.push({ id: "match-" + j.id, at: t(j.matchedAt || j.createdAt), icon: "hired", text: "You hired " + (u ? u.company : "a pro") + " for: " + j.title, jobId: j.id });
      }
      // messages: latest message from the other party on my matched jobs
      const involved = (isHO && j.homeownerUid === me.uidH) || (isCO && j.chosen === me.uidC);
      if (involved && (j.status === "matched" || j.status === "complete")) {
        try {
          const msgs = (await sGet(CHAT_KEY(j.id))) || [];
          const last = msgs[msgs.length - 1];
          if (last && last.from !== me.uidH && last.from !== me.uidC) {
            list.push({ id: "msg-" + j.id + "-" + last.id, at: t(last.at), icon: "msg", text: last.name + ": " + last.text.slice(0, 40) + (last.text.length > 40 ? "…" : ""), jobId: j.id });
          }
        } catch (e) { /* skip */ }
      }
    }
    list.sort((a, b) => b.at - a.at);
    setNotifs(list.slice(0, 30));
  };
  const checkUnread = async (jobs) => {
    const mine = jobs.filter((j) => (j.status === "matched" || j.status === "complete") && (j.homeownerUid === me.uidH || j.chosen === me.uidC));
    const out = {};
    for (const j of mine.slice(0, 12)) {
      try {
        const msgs = (await sGet(CHAT_KEY(j.id))) || [];
        const read = (me.readMsgs || {})[j.id] || 0;
        const unseen = msgs.slice(read).filter((x) => x.from !== me.uidH && x.from !== me.uidC).length;
        if (unseen > 0) out[j.id] = unseen;
      } catch (e) { /* skip */ }
    }
    setUnread(out);
  };
  const refreshBoard = async () => {
    setBusy("board");
    try {
      const rawIdx = (await sGet(JOB_INDEX)) || [];
      const ids = rawIdx.slice(0, 40);
      const jobs = [];
      const need = new Set();
      for (const id of ids) {
        const j = await sGet(JOB_KEY(id));
        if (!j) continue;
        jobs.push(j);
        if (j.homeownerUid) need.add(j.homeownerUid);
        if (j.chosen) need.add(j.chosen);
        for (const a of j.applicants || []) need.add(a.uid);
      }
      const merged = { ...users };
      for (const uid of need) {
        if (!merged[uid]) {
          const u = await sGet(USER_KEY(uid));
          if (u) merged[uid] = u;
        }
      }
      setUsers(merged);
      setBoard(jobs);
      const nowA = Date.now();
      if (nowA - lastArchive.current > 20000) { lastArchive.current = nowA; autoArchive(jobs); }
      detectCelebrations(jobs);
      checkUnread(jobs);
      buildNotifs(jobs);
      setDiag(rawIdx.length + " job" + (rawIdx.length === 1 ? "" : "s") + " on the board, " + jobs.length + " loaded");
    } catch (e) { setDiag("board read FAILED: " + errMsg(e)); flash("Couldn't load the board: " + errMsg(e)); }
    setBusy("");
  };
  const checkRange = async () => {
    if (me.role !== "contractor" || !radiusOn || !profC.base || !profC.base.trim()) { setInRange(null); return; }
    const open = board.filter((j) => j.status === "open" && !me.passed.includes(j.id));
    const locs = open.map((j) => ({ id: j.id, loc: j.town || j.address || "" })).filter((x) => x.loc);
    if (!locs.length) { setInRange({}); return; }
    try {
      const prompt =
        "A contractor is based at \"" + profC.base.trim() + "\" and will travel up to " + (profC.radius || 30) + " miles. For each job location, say if it is plausibly WITHIN that driving radius. Use your knowledge of US geography; approximate is fine.\n" +
        "JOBS:\n" + locs.map((x) => x.id + ": " + x.loc).join("\n") + "\n" +
        "Respond with ONLY raw JSON, no markdown: {\"in\": [job ids that are within range]}.";
      const text = await callClaude([{ role: "user", content: prompt }], { background: true });
      const d = parseJSON(text);
      const inSet = new Set(Array.isArray(d.in) ? d.in.map(String) : []);
      const map = {};
      for (const x of locs) map[x.id] = inSet.has(String(x.id));
      setInRange(map);
    } catch (e) { setInRange(null); /* on failure, show all */ }
  };
  const calcDistances = async () => {
    if (me.role !== "homeowner") return;
    const jobs = board.filter((j) => j.homeownerUid === me.uidH && j.status === "open" && (j.applicants || []).length);
    const pairs = [];
    for (const j of jobs) {
      const jl = j.town || j.address || "";
      if (!jl) continue;
      for (const a of j.applicants || []) {
        const u = users[a.uid];
        const base = u && (u.base || u.town);
        if (base && appDist[j.id + a.uid] == null) pairs.push({ key: j.id + a.uid, from: base, to: jl });
      }
    }
    if (!pairs.length) return;
    try {
      const prompt =
        "Estimate the approximate driving distance in miles for each pair (from contractor base -> job location). Use US geography knowledge; rough is fine.\n" +
        pairs.map((x, i) => i + ": " + x.from + " -> " + x.to).join("\n") + "\n" +
        "Respond with ONLY raw JSON, no markdown: {\"miles\": [{\"i\": index, \"mi\": number}]}.";
      const text = await callClaude([{ role: "user", content: prompt }], { background: true });
      const d = parseJSON(text);
      const upd = {};
      for (const m of (d.miles || [])) { const pr = pairs[m.i]; if (pr) upd[pr.key] = Math.round(num(m.mi)); }
      if (Object.keys(upd).length) setAppDist((prev) => ({ ...prev, ...upd }));
    } catch (e) { /* leave blank */ }
  };
  const refreshPros = async () => {
    setBusy("pros");
    try {
      const idx = ((await sGet(USER_INDEX)) || []).slice(0, 40);
      const list = [];
      const merged = { ...users };
      for (const uid of idx) {
        const u = merged[uid] || (await sGet(USER_KEY(uid)));
        if (u) { merged[uid] = u; if (u.role === "contractor") list.push(u); }
      }
      setUsers(merged);
      setPros(list);
    } catch (e) { flash("Couldn't load pros: " + errMsg(e)); }
    setBusy("");
  };
  useEffect(() => {
    if (!loaded.current || !me.role) return;
    refreshBoard();
    if (tab === "pros") refreshPros();
  }, [tab, me.role]); // eslint-disable-line
  useEffect(() => {
    if (me.role === "contractor" && tab === "feed" && radiusOn) checkRange();
    if (!radiusOn) setInRange(null);
  }, [board, radiusOn, tab]); // eslint-disable-line
  useEffect(() => {
    if (me.role === "homeowner" && tab === "myjobs") calcDistances();
  }, [board, tab]); // eslint-disable-line
  useEffect(() => {
    if (convEndRef.current) convEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [convMsgs, convBusy]); // eslint-disable-line
  useEffect(() => {
    // contractor opens the Estimator: AL "types" then the greeting + scope buttons pop in together
    if (me.role === "contractor" && tab === "estimator" && !estScope && !estResult && !estGreeted && !estGreetRef.current) {
      estGreetRef.current = true;
      setEstTyping(true);
      setEstTyped("");
      // show dots briefly, then type the greeting out character-by-character
      const dotsT = setTimeout(() => {
        setEstTyping(false);
        setEstGreeted(true);
        let i = 0;
        const tick = () => {
          i++;
          setEstTyped(EST_GREETING.slice(0, i));
          if (i < EST_GREETING.length) setTimeout(tick, 28);
        };
        tick();
      }, 800);
      return () => clearTimeout(dotsT);
    }
  }, [me.role, tab]); // eslint-disable-line
  useEffect(() => {
    if (me.role === "homeowner" && tab === "chat" && !convStarted && convMsgs.length === 0 && !convBusy && !convGreeting.current) {
      convGreeting.current = true;
      const first = ((profH.name || "").trim().split(/\s+/)[0] || "");
      const hi = first ? "Hey " + first + "! I'm AL, your CazBid estimator. " : "Hey there! I'm AL, your CazBid estimator. ";
      const greet = hi + "Tell me about the project you're thinking about — even a sentence works. A photo or two helps a lot too, if you've got 'em. What's going on?";
      setConvBusy(true);
      const t = setTimeout(() => { setConvMsgs([{ role: "ai", text: greet }]); setConvBusy(false); }, 1300);
      return () => clearTimeout(t);
    }
  }, [me.role, tab]); // eslint-disable-line
  useEffect(() => {
    (async () => {
      setViewPosts([]);
      if (!viewing) return;
      const u = users[viewing];
      if (!u || u.role !== "contractor") return;
      const out = [];
      for (const meta of u.posts || []) {
        // demo contractors carry their photo inline on the meta; real posts store it in POST_KEY
        if (meta.photo) { out.push({ id: meta.id, caption: meta.caption, photo: meta.photo }); continue; }
        try {
          const rec = await sGet(POST_KEY(viewing, meta.id));
          if (rec && rec.photo) out.push({ id: meta.id, caption: meta.caption, photo: rec.photo });
        } catch (e) { /* skip */ }
      }
      setViewPosts(out);
    })();
  }, [viewing]); // eslint-disable-line
  useEffect(() => {
    if (!me.role) return;
    const t = setInterval(() => { if (board.length) checkUnread(board); }, 25000);
    return () => clearInterval(t);
  }, [me.role, board, me.readMsgs]); // eslint-disable-line
  useEffect(() => {
    if (!chatJob) return;
    const t = setInterval(() => refreshChat(false), 10000);
    return () => clearInterval(t);
  }, [chatJob]); // eslint-disable-line

  /* ----- ratings & reviews ----- */
  const coStars = {}, hoStars = {};
  for (const uid in users) {
    const u = users[uid];
    if (u && Array.isArray(u.seedReviews) && u.seedReviews.length) {
      if (!coStars[uid]) coStars[uid] = { s: 0, n: 0 };
      for (const r of u.seedReviews) { coStars[uid].s += num(r.stars); coStars[uid].n++; }
    }
  }
  for (const j of board) {
    if (j.ratings && j.ratings.ofContractor && j.chosen) {
      if (!coStars[j.chosen]) coStars[j.chosen] = { s: 0, n: 0 };
      coStars[j.chosen].s += num(j.ratings.ofContractor.stars); coStars[j.chosen].n++;
    }
    if (j.ratings && j.ratings.ofHomeowner && j.homeownerUid) {
      if (!hoStars[j.homeownerUid]) hoStars[j.homeownerUid] = { s: 0, n: 0 };
      hoStars[j.homeownerUid].s += num(j.ratings.ofHomeowner.stars); hoStars[j.homeownerUid].n++;
    }
  }
  const starsOf = (map, uid) => {
    const r = map[uid];
    return r && r.n ? "★ " + (r.s / r.n).toFixed(1) + " (" + r.n + ")" : null;
  };
  const reviewsFor = (uid, role) => {
    const out = [];
    if (role === "contractor" && users[uid] && Array.isArray(users[uid].seedReviews)) {
      for (const r of users[uid].seedReviews) out.push({ ...r, job: "Past job", by: "Verified homeowner" });
    }
    for (const j of board) {
      if (role === "contractor" && j.chosen === uid && j.ratings && j.ratings.ofContractor) {
        out.push({ ...j.ratings.ofContractor, job: j.title, by: j.homeownerName || "Homeowner" });
      }
      if (role === "homeowner" && j.homeownerUid === uid && j.ratings && j.ratings.ofHomeowner) {
        const cu = users[j.chosen];
        out.push({ ...j.ratings.ofHomeowner, job: j.title, by: (cu && cu.company) || "Contractor" });
      }
    }
    return out.sort((a, b) => (b.at || "").localeCompare(a.at || ""));
  };
  const ReviewList = ({ uid, role, emptyText }) => {
    const list = reviewsFor(uid, role);
    if (!list.length) return <p className="hint">{emptyText}</p>;
    return (
      <div className="revlist">
        {list.map((r, i) => (
          <div className="rev" key={i}>
            <div className="revtop">
              <Stars value={num(r.stars)} />
              <span className="revby">{r.by}</span>
              <span className="revat">{fmtDate(r.at)}</span>
            </div>
            {r.comment && <div className="revtxt">“{r.comment}”</div>}
            <div className="revjob">{r.job}</div>
          </div>
        ))}
      </div>
    );
  };

  /* ----- job photos / report / bid ----- */
  const addPhotos = async (files) => {
    if (!files || !files.length) return;
    setBusy("photos");
    try {
      const list = [];
      let firstErr = null;
      for (const f of Array.from(files).slice(0, 4)) {
        try { list.push(await imageToJpeg(f)); }
        catch (e) {
          if (["image/jpeg", "image/png", "image/webp", "image/gif"].includes(f.type)) {
            try { list.push(await readDataURL(f)); } catch (e2) { firstErr = firstErr || e2; }
          } else firstErr = firstErr || e;
        }
      }
      if (!list.length) throw new Error("couldn't read those photos" + (firstErr && firstErr.message ? " (" + firstErr.message + ")" : ""));
      setPhotos((p) => [...p, ...list].slice(0, 4));
    } catch (e) { flash("Photo add failed: " + errMsg(e)); }
    setBusy("");
  };
  const EV_PROMPT = "This is a measurement report - either a ROOF aerial report (EagleView, QuickMeasure, Hover) or an INDOOR room scan / floor plan (Polycam, magicplan, Canvas, RoomPlan). Respond with ONLY raw JSON, no markdown: {\"summary\": \"one compact line listing every useful measurement found. Roof example: 2450 sqft, 8/12 pitch, eaves 120 LF, ridges 45 LF, valleys 30 LF, 6 penetrations. Indoor example: kitchen 14x18 ft, living 16x22 ft, total floor 680 sqft, ceilings 8 ft, walls 96 LF\"}. If nothing measurable, return {\"summary\": \"\"}.";
  const fileToB64 = (file) => new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result.split(",")[1]);
    r.onerror = () => rej(new Error("Read failed"));
    r.readAsDataURL(file);
  });
  // ---- contractor estimator: measurement upload (reuses EV_PROMPT + AI extraction) ----
  const handleEstReport = async (file) => {
    if (!file) return;
    setEstBusy("report");
    try {
      const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name || "");
      let block;
      if (isPdf) {
        if (file.size > 28 * 1024 * 1024) throw new Error("PDF over 28MB");
        block = { type: "document", source: { type: "base64", media_type: "application/pdf", data: await fileToB64(file) } };
      } else {
        const b64 = (await imageToJpeg(file, 2000)).split(",")[1];
        block = { type: "image", source: { type: "base64", media_type: "image/jpeg", data: b64 } };
      }
      const text = await callClaude([{ role: "user", content: [block, { type: "text", text: EV_PROMPT }] }]);
      const d = parseJSON(text);
      if (!d.summary || !String(d.summary).trim()) throw new Error("No measurements found in that file");
      setEstDims("Measurements: " + String(d.summary).slice(0, 400));
      flash("Report read — measurements attached to your estimate.");
    } catch (e) { flash("Report parse failed: " + errMsg(e) + ". Try the PDF or type the numbers in the scope."); }
    setEstBusy("");
  };
  // ---- contractor estimator: full takeoff + costing (reuses the homeowner bottom-up engine) ----
  const EV_FORMULAS = "ROOFING MATERIAL TAKEOFF FORMULAS — if this is a roofing job and you have the measurements, compute quantities with THESE exact formulas (round up as noted), do not guess:\n" +
    "- Field shingles (squares): (Area sqft x 1.12) / 100, round up to whole square.\n" +
    "- Starter (bundles): (Eaves LF x 1.10) / 100, round up to bundle.\n" +
    "- Hip/Ridge caps (bundles): ((Ridges LF + Hips LF) x 1.10) / 30, round up to bundle.\n" +
    "- Ice & water (rolls): ((Eaves x 2) + Valleys + Flashing + StepFlash) / 66, round up.\n" +
    "- Drip edge (10ft pieces): (Total eave+rake LF x 1.15) / 10, round up.\n" +
    "- W-valley 14in (10ft pieces): Valleys LF / 50, round up.\n" +
    "- Step flashing (bundles/pieces): StepFlash LF / 25, round up.\n";
  const runEstimate = async () => {
    if (!estScope && !estOpenDesc.trim() && !estDesc.trim() && !estPhotos.length && !estDims) { flash("Pick a work type or describe the job first."); return; }
    setEstBusy("run");
    setEstResult(null);
    try {
      const region = (profC.base || profC.town || profH.town || "upstate New York").trim();
      // The relevant Caza trade manual loads SERVER-SIDE (the Netlify function injects it as a
      // system prompt based on this trade key) — no browser fetch, no CORS, all 12 manuals available.
      const __manualKey = manualTradeKey(estScope, estDesc);
      const prompt =
        "You are a senior estimator for an established, fully-insured exterior/roofing contractor near " + region + ". Build a DETAILED, itemized estimate a contractor can hand to a customer.\n" +
        "JOB: " + (estDesc.trim() || "(see photos)") + "\n" +
        (estDims ? estDims + "\n" : "") +
        (estScope ? "WORK TYPE: " + estScope + "\n" : "") +
        (dimsText() ? "DIMENSIONS (use these exact numbers in the takeoff): " + dimsText() + "\n" : "") +
        (estPhotos.length ? "Photos attached — read scope, materials, condition.\n" : "") +
        EV_FORMULAS +
        "Use web search to verify CURRENT " + new Date().getFullYear() + " LOCAL figures: burdened labor rate per man-hour (small-market rate, ~$45-70/hr for most trades, not inflated metro/union numbers), real material unit costs (contractor pricing), local sales tax rate, equipment/disposal. Be realistic and accurate — do not pad.\n" +
        "Produce a COMPLETE, itemized materials takeoff with quantity, unit, and total cost per line. The FIRST item must be the PRIMARY material (slate/shingle/metal for roofing, siding product for siding, decking for decks).\n" +
        TRADE_BASE_RULES +
        tradeModuleFor(estScope, estDesc) +
        "Use the measured dimensions above and (for roofing) the EagleView formulas to set quantities. A typical full job has 8-15+ line items, not two. Suggest a sensible crew size and resulting days on site.\n" +
        "LABOR - FOLLOW THIS PROCEDURE IN ORDER, DO NOT SKIP STEP 1:\n" +
        "STEP 1 (REQUIRED FIRST): Look in the CONTRACTOR PRODUCTION RATES list below for the rate(s) that match the labor tasks in this job (match by name loosely - a standing seam job matches \"Standing seam panel install\", a slate job matches \"Slate / Nu-Lok install\", plus tear-off, flashing, ridge, etc.). For EACH matching task compute hours = quantity x that MH/unit rate, then ADD them up. These are the contractor REAL numbers and ALWAYS take priority over your own per-square guesses.\n" +
        "STEP 2 (ONE combined difficulty multiplier, do NOT stack several): pick a SINGLE factor for the whole job based on the hardest condition, and CAP it at 1.5. Guide: easy/walkable = 1.0; moderate (6-8/12 or somewhat cut up) = 1.15-1.25; steep AND complex (8/12+ with many facets/valleys) = 1.35-1.5 MAX. Do not multiply steep x complex x access together - choose one combined number in that range. Apply it to the INSTALL labor only, not to tear-off, flashing, or trim lines.\n" +
        "STEP 3 (fallback ONLY if nothing matched): if and ONLY if NO task in the rate book matches, estimate from benchmarks - asphalt re-roof ~1.5-2.5 MH/sq; steep/complex/tear-off/specialty much higher (slate or standing seam 4-12+ MH/sq). Never return 0 or a token number like 16 hours for a big roof.\n" +
        "Set laborHours = TOTAL man-hours after multipliers. Set laborSource to \"ratebook\" if ANY hours came from STEP 1, or \"estimate\" only if you used STEP 3 for everything. Set a burdened rate per man-hour and days = laborHours / (crew x ~8).\n" +
        (profC.prefMaterials && profC.prefMaterials.trim() ? "THIS CONTRACTOR'S PREFERRED BRANDS (favor these in the takeoff and in the options below when they fit the job): " + profC.prefMaterials.trim() + "\n" : "") +
        (matCosts.length ? "THIS CONTRACTOR'S OWN MATERIAL PRICE LIST (use THESE exact unit costs when a line matches — they are real supplier prices, more accurate than any estimate; match by name loosely):\n" + matCosts.slice(0, 120).map((m) => "- " + m.name + (m.unit ? " (" + m.unit + ")" : "") + ": $" + m.cost).join("\n") + "\n" : "") +
        "CONTRACTOR'S PRICE BOOK (these are THEIR material unit costs — use them when a takeoff line matches, match by name loosely; they override your estimates):\n" + priceBook.slice(0, 120).map((m) => "- " + m.name + " (" + m.unit + "): $" + m.price).join("\n") + "\n" +
        "CONTRACTOR'S PRODUCTION RATES (man-hours per unit, sq = 100 sqft — use these to compute labor hours for matching tasks):\n" + rateBook.slice(0, 120).map((r) => "- " + r.task + " (" + r.unit + "): " + r.rate + " MH/unit").join("\n") + "\n" +
        "ALSO provide a GOOD / BETTER / BEST set of 3 popular, commonly-stocked PRIMARY-material options for this region (real product lines a local supplier like ABC Supply, SRS, Beacon, Home Depot or Lowe's actually carries — e.g. for roofing: a 3-tab or builder shingle, a mid architectural like GAF Timberline HDZ, and a premium/designer line). For each give a name, a one-line why, the total material cost for THIS job's primary-material quantity at that tier, and a real search URL (a manufacturer product page or a supplier/Home Depot/Lowe's search URL). Do not invent fake URLs — use a real product or a search link like https://www.homedepot.com/s/timberline%20hdz.\n" +
        "FINAL SELF-CHECK before you answer (do this silently, then output ONLY the JSON): (1) SYSTEM PURITY - re-read your items[] and DELETE any line that belongs to a different roofing or siding system than this job's. On an asphalt shingle job, strip out every metal-panel, standing-seam, panel-clip, seam-tape, or metal-trim line. (2) QUANTITIES - sanity-check each qty against the measurements; the primary material is line 1; no zero or absurd quantities. (3) items[] is MATERIALS ONLY (no labor, equipment, or dumpster lines). (4) Record what you verified or removed as 2-4 short plain-English strings in the \"checks\" array.\n" +
        "Respond with ONLY raw JSON, no markdown: {\"title\": short job name, \"trade\": one word, \"checks\": [2-4 short strings of what your final self-check verified or fixed], \"items\": [{\"name\": material name, \"qty\": number, \"unit\": e.g. squares/bundles/pieces/sheets/LF, \"cost\": total $ for this line}], \"primaryOptions\": [{\"tier\": \"Good\"|\"Better\"|\"Best\", \"name\": product line, \"why\": one short line, \"cost\": total $ for the primary material at this tier for this job, \"url\": real link}], \"laborHours\": total man-hours (number), \"laborRate\": burdened $/hr, \"laborSource\": \"ratebook\" or \"estimate\", \"equipment\": $ total, \"taxRate\": decimal, \"crew\": number of workers, \"days\": days on site, \"notes\": one short line of estimator notes — a genuinely useful heads-up (access, tear-off surprises, what really drives the price) with a touch of dry job-site humor, but keep it professional and skip the joke if the job is straightforward}";
      const content = [
        ...estPhotos.slice(0, 3).map((ph) => {
          const mt = ph.startsWith("data:") ? (ph.substring(5, ph.indexOf(";")) || "image/jpeg") : "image/jpeg";
          return { type: "image", source: { type: "base64", media_type: mt, data: ph.split(",")[1] } };
        }),
        { type: "text", text: prompt },
      ];
      let text;
      try { text = await callClaudeBackground([{ role: "user", content }], { search: true, maxTokens: 4000, trade: __manualKey }); }
      catch (e1) { text = await callClaudeBackground([{ role: "user", content: prompt }], { search: true, maxTokens: 4000, trade: __manualKey }); }
      const __manualLoaded = !!__LAST_MANUAL_USED;
      let d;
      try { d = parseJSON(text); }
      catch (eParse) {
        // last-ditch salvage: pull the largest repairable JSON object out of a truncated reply
        const raw = (text || "").replace(/```json|```/g, "").trim();
        const st = raw.search(/[\[{]/);
        if (st < 0) throw new Error("Estimate failed: reply came back empty — tap Build again.");
        try { d = repairJSON(raw.slice(st)); }
        catch (e2) { throw new Error("Estimate failed: the takeoff was long and got cut off — tap Build estimate again."); }
      }
      const items = Array.isArray(d.items) ? d.items.map((it) => {
        const qty = num(it.qty) || 0;
        const cost = Math.round(num(it.cost) || 0);
        const unitPrice = qty > 0 ? cost / qty : cost; // per-unit so qty edits recompute cost
        return { name: String(it.name || "Item"), qty: qty, unit: String(it.unit || ""), unitPrice: unitPrice, cost: cost };
      }) : [];
      // DETERMINISTIC quantities: overwrite formula-driven roof lines with code-computed values
      // (AI keeps the line names + unit pricing; code fixes the math). Matches by keyword.
      const sysStr = (estScope + " " + estDesc).toLowerCase();
      const isRoof = /roof|shingle|standing seam|slate|nu-?lok|metal panel|tpo|epdm|membrane|lok|snap.?lock/.test(sysStr);
      if (isRoof) {
        const q = computeRoofQuantities(estDims, sysStr, num(estPanelW));
        if (q && q.length) {
          const matchers = [
            { key: "panel", kw: ["panel", "lok", "standing seam", "seam "] },
            { key: "clip", kw: ["clip"] },
            { key: "field", kw: ["shingle", "slate", "field", "membrane", "tpo", "epdm"] },
            { key: "iw", kw: ["ice", "i&w", "ice & water", "ice and water"] },
            { key: "drip", kw: ["drip"] },
            { key: "starter", kw: ["starter"] },
            { key: "ridge", kw: ["ridge cap", "hip cap", "hip/ridge", "ridge/hip"] },
            { key: "valley", kw: ["valley"] },
            { key: "step", kw: ["step flash"] },
            { key: "pen", kw: ["pipe boot", "penetration", "pipe flash"] },
          ];
          q.forEach((cq) => {
            const mm = matchers.find((x) => x.key === cq.key);
            if (!mm) return;
            const idx = items.findIndex((it) => { const n = (it.name || "").toLowerCase(); return mm.kw.some((k) => n.indexOf(k) >= 0); });
            if (idx >= 0) {
              const old = items[idx];
              // derive a per-unit price; if the AI's unit differs from the computed unit, rebuild unit price from cost/computedQty
              let up = num(old.unitPrice);
              const unitChanged = (old.unit || "").toLowerCase() !== (cq.unit || "").toLowerCase();
              if (unitChanged && cq.qty > 0) up = old.cost / cq.qty; // keep total cost, restate per computed unit
              items[idx] = Object.assign({}, old, { qty: cq.qty, unit: cq.unit, unitPrice: up, cost: Math.round(up * cq.qty) });
            }
          });
        }
      }
      const primaryOptions = Array.isArray(d.primaryOptions) ? d.primaryOptions.slice(0, 3).map((o) => ({
        tier: String(o.tier || ""), name: String(o.name || ""), why: String(o.why || ""),
        cost: Math.round(num(o.cost) || 0), url: String(o.url || ""),
      })).filter((o) => o.name) : [];
      const crewN = num(d.crew) || 2, daysN = num(d.days) || 1;
      let laborHours = Math.round(num(d.laborHours) || 0);
      let laborRate = Math.round(num(d.laborRate) || 0);
      let laborSrc = String(d.laborSource || "").toLowerCase() === "ratebook" ? "ratebook" : "estimate";
      // DETERMINISTIC labor: compute from the rate book in code so it never depends on the AI doing the lookup.
      const calc = computeLaborFromRateBook(items, rateBook, estDims, estScope, estDesc);
      if (calc && calc.hours > 0) { laborHours = calc.hours; laborSrc = "ratebook"; }
      // size-scaled safety floor: only if we still have no real number
      let sqGuess = 0;
      items.forEach((it) => { const u = (it.unit || "").toLowerCase(); if (u.indexOf("square") >= 0 || u === "sq") sqGuess = Math.max(sqGuess, num(it.qty) || 0); });
      if (!sqGuess && estDims) { const m = String(estDims).match(/([\d,]+(?:\.\d+)?)\s*sqft/i); if (m) sqGuess = (num(m[1]) || 0) / 100; }
      const minHrsBySize = sqGuess > 0 ? Math.round(sqGuess * 2) : crewN * daysN * 8;
      if (!calc && laborHours < minHrsBySize * 0.5) { laborHours = Math.max(laborHours, minHrsBySize); laborSrc = "estimate"; }
      if (laborHours <= 0) laborHours = Math.max(1, crewN * daysN * 8);
      if (laborRate <= 0) laborRate = 60;
      setEstResult({
        title: String(d.title || "Estimate"), trade: String(d.trade || "general").toLowerCase(),
        items, primaryOptions, chosenTier: null,
        laborHours: laborHours, laborRate: laborRate, laborSource: laborSrc,
        equipment: Math.round(num(d.equipment) || 0), taxRate: num(d.taxRate) || 0.08,
        crew: crewN, days: daysN, notes: String(d.notes || ""),
        checks: Array.isArray(d.checks) ? d.checks.map((c) => String(c)).filter(Boolean).slice(0, 6) : [],
        manualLoaded: __manualLoaded, manualKey: __manualKey,
      });
    } catch (e) { flash("Estimate failed: " + errMsg(e)); }
    setEstBusy("");
  };
  // editable materials list helpers
  const estItemSet = (i, field, val) => {
    setEstResult((r) => {
      if (!r) return r;
      const items = r.items.map((it, idx) => {
        if (idx !== i) return it;
        if (field === "name" || field === "unit") return { ...it, [field]: val };
        const v = num(val);
        if (field === "qty") { const up = num(it.unitPrice); return { ...it, qty: v, cost: Math.round(up * v) }; }
        if (field === "unitPrice") { return { ...it, unitPrice: v, cost: Math.round(v * (num(it.qty) || 0)) }; }
        if (field === "cost") { const q = num(it.qty) || 0; return { ...it, cost: Math.round(v), unitPrice: q > 0 ? v / q : v }; }
        return { ...it, [field]: v };
      });
      return { ...r, items };
    });
  };
  const estItemAdd = () => setEstResult((r) => r ? { ...r, items: [...r.items, { name: "New item", qty: 1, unit: "", unitPrice: 0, cost: 0 }] } : r);
  const estPickTier = (opt) => setEstResult((r) => {
    if (!r || !r.items.length) return r;
    const items = r.items.map((it, idx) => idx === 0 ? { ...it, name: opt.name, cost: opt.cost } : it);
    return { ...r, items, chosenTier: opt.tier };
  });
  const estItemDel = (i) => setEstResult((r) => r ? { ...r, items: r.items.filter((_, idx) => idx !== i) } : r);
  const addDimRow = (label, unit) => setEstDimRows((d) => [...d, { id: rid(), label: label || "", value: "", unit: unit || "" }]);
  const upDimRow = (id, patch) => setEstDimRows((d) => d.map((x) => x.id === id ? { ...x, ...patch } : x));
  const rmDimRow = (id) => setEstDimRows((d) => d.filter((x) => x.id !== id));
  const dimsText = () => estDimRows.filter((d) => d.label && d.value !== "").map((d) => d.label + ": " + d.value + (d.unit ? " " + d.unit : "")).join(", ");
  const fetchCustomDims = async (workType) => {
    const wt = (workType || estScope || "").toString().trim();
    if (!wt || estBusy) return;
    setEstBusy("dims");
    try {
      const prompt = "A contractor is estimating this scope of work: \"" + wt + "\". List the key physical dimensions/quantities needed to price it. Respond ONLY with JSON, no prose: {\"dims\":[{\"label\":\"short name\",\"unit\":\"sqft|LF|ct|ft|ea|etc\"}]}. Give 3 to 7 of the most relevant measurable inputs a contractor would actually take off. Keep labels short.";
      const text = await callClaude([{ role: "user", content: prompt }]);
      const d = parseJSON(text);
      const dims = Array.isArray(d.dims) ? d.dims : [];
      if (!dims.length) { flash("Couldn't generate dimensions — add them manually below."); }
      else {
        setEstDimRows(dims.slice(0, 8).map((x) => ({ id: rid(), label: String(x.label || "").slice(0, 40), value: "", unit: String(x.unit || "").slice(0, 8) })));
      }
    } catch (e) { flash("Dimension lookup failed — add them manually below."); }
    setEstBusy("");
  };
  const savePriceBook = (next) => { setPriceBook(next); pSet(PRICEBOOK_KEY, next); };
  const saveRateBook = (next) => { setRateBook(next); pSet(RATEBOOK_KEY, next); };
  // contractor material-cost CSV: columns like name,unit,cost (header row auto-detected)
  const handleMatCsv = async (file) => {
    if (!file) return;
    setMatCostBusy(true);
    try {
      const text = await file.text();
      const lines = text.split(/\r?\n/).filter((l) => l.trim());
      if (!lines.length) throw new Error("empty file");
      const splitRow = (l) => l.split(",").map((c) => c.trim().replace(/^"|"$/g, ""));
      let start = 0;
      const head = splitRow(lines[0]).map((h) => h.toLowerCase());
      const looksHeader = head.some((h) => /name|material|item|desc/.test(h)) || head.some((h) => /cost|price/.test(h));
      let ni = 0, ui = 1, ci = 2;
      if (looksHeader) {
        start = 1;
        const fi = (re) => head.findIndex((h) => re.test(h));
        const nn = fi(/name|material|item|desc/); if (nn >= 0) ni = nn;
        const uu = fi(/unit|uom|each|per/); if (uu >= 0) ui = uu;
        const cc2 = fi(/cost|price|rate|\$/); if (cc2 >= 0) ci = cc2;
      }
      const rows = [];
      for (let i = start; i < lines.length; i++) {
        const cols = splitRow(lines[i]);
        const name = (cols[ni] || "").trim();
        const cost = num((cols[ci] || "").replace(/[^0-9.\-]/g, ""));
        if (!name || !cost) continue;
        rows.push({ name, unit: (cols[ui] || "").trim(), cost });
      }
      if (!rows.length) throw new Error("no usable rows — need a name and a cost column");
      const next = rows.slice(0, 500);
      setMatCosts(next);
      pSet(MATCOST_KEY, next);
      flash("Loaded " + next.length + " material prices — your estimates will use these.");
    } catch (e) { flash("Couldn't read that CSV: " + errMsg(e) + ". Use columns: name, unit, cost."); }
    setMatCostBusy(false);
  };
  const clearMatCosts = () => { setMatCosts([]); pSet(MATCOST_KEY, []); flash("Material price list cleared."); };

  // ---- homeowner conversational estimate engine ----
  const CONV_SYS = (region, name, homeAddr) =>
    "You are AL, a warm, friendly local contractor's estimator for CazBid, chatting with a homeowner near " + region + " to price their project. You go by AL. ALWAYS write your name in all caps as \"AL\" (never \"Al\"), so people don't misread it as \"AI\". " +
    (name ? "The homeowner's first name is " + name + ". Greet them by name at the start, and use their first name naturally about three times total across the whole conversation (a warm hello, somewhere in the middle, and in your final wrap-up) — never more, and never force it where it sounds robotic. " : "") +
    "Talk like a knowledgeable friend texting them — relaxed, encouraging, plain English, NEVER clinical or robotic. " +
    "Be genuinely FUNNY in a dry, warm, job-site way — the kind of contractor who cracks a quick joke while measuring. Light teasing, self-deprecating quips, a little weather or roofing humor now and then. Keep it natural and SPARING: a clever line here and there, never forced, never a stand-up routine, and NEVER at the homeowner expense or about their budget. If the project is serious (storm damage, an active leak wrecking their living room), read the room and dial the jokes way back — warmth first. The humor should make them smile, never slow the estimate or undercut your credibility. " +
    "Affirm what they tell you (\"Got it — a 20-square asphalt roof, nice\"), reassure them when they're unsure (\"No worries, a rough guess is totally fine\"), and keep a little momentum (\"One more thing and I'll have a tight number for you\"). " +
    "Ask ONE question at a time — the single most useful next question to firm up the price. Keep questions short and answerable in a few words. Do not dump a list. " +
    "EARLY ON, confirm WHERE the work is: ask if it's at their home" + (homeAddr ? " (" + homeAddr + ")" : "") + " or a different property; if different, ask for that address. You need the work location to size the structure. " +
    "If the job size depends on the structure (roof, siding, square footage) and the homeowner does not know the measurements, USE THE WORK ADDRESS to make a reasonable BALLPARK of the structure size — search for or infer typical square footage for that property/home type/area, price from that, and clearly note in your message that it's an estimate from the address until they get exact measurements. A close ballpark beats asking them for numbers they don't have. " +
    "As you learn more, you build a BOTTOM-UP cost estimate (man-hours x burdened local labor + materials + material tax + equipment) and a price range using 28-35% gross margin. When info is thin, keep the range wide and your confidence low; as facts accumulate, tighten it. " +
    "When you have enough to price it solidly (usually after 3-6 exchanges), set done=true, stop asking, and give a friendly wrap-up. " +
    "Use web search when you genuinely need current local material or labor numbers. " +
    "EVERY reply MUST be ONLY raw JSON, no markdown: {\"message\": your friendly chat reply (1-3 sentences, may include the next question), \"options\": [if your message asks the homeowner to choose between specific answers, list 2-4 short tappable choices here, e.g. [\"Architectural shingles\",\"Basic 3-tab\"]; otherwise []], \"facts\": [array of ALL confirmed details so far as short strings], \"priceLow\": number, \"priceHigh\": number, \"days\": number, \"confidence\": \"low\"|\"medium\"|\"high\", \"primaryOptions\": [up to 3 {\"tier\":\"Good\"|\"Better\"|\"Best\", \"name\":product, \"why\":one line, \"url\":real link} ONLY once you know the material type, else []], \"done\": boolean}";

  const convHistoryText = (msgs) => msgs.map((m) => (m.role === "ai" ? "ESTIMATOR" : "HOMEOWNER") + ": " + m.text).join("\n");

  const convCall = async (msgs, withPhotos) => {
    const region = (profH.town || "upstate New York").trim();
    const firstName = ((profH.name || "").trim().split(/\s+/)[0] || "");
    const userText = CONV_SYS(region, firstName, (profH.address || "").trim()) + "\n\nCONVERSATION SO FAR:\n" + convHistoryText(msgs) +
      "\n\nReply now as the estimator. Output ONLY the raw JSON object described above — start your reply with { and end with } and put NOTHING else before or after it. Keep it warm and friendly, one question at a time.";
    const content = [];
    if (withPhotos && convPhotos.length) {
      for (const ph of convPhotos.slice(0, 3)) {
        const mt = ph.startsWith("data:") ? (ph.substring(5, ph.indexOf(";")) || "image/jpeg") : "image/jpeg";
        content.push({ type: "image", source: { type: "base64", media_type: mt, data: ph.split(",")[1] } });
      }
    }
    content.push({ type: "text", text: userText });
    // search only when there's enough context to actually price (later turns); early turns skip search for speed + reliable JSON
    const useSearch = msgs.length >= 4;
    const text = await callClaudeBackground([{ role: "user", content }], { search: useSearch, maxTokens: 1800 });
    // forgiving parse: try strict JSON, else salvage a friendly message so the chat never dead-ends
    try {
      return parseJSON(text);
    } catch (e) {
      const raw = (text || "").replace(/```json|```/g, "").trim();
      // 1) try to pull a "message" field out of partial/broken JSON
      const mm = raw.match(/"message"\s*:\s*"((?:[^"\\]|\\.)*)"/);
      if (mm && mm[1]) {
        const msg = mm[1].replace(/\\"/g, '"').replace(/\\n/g, " ").trim();
        // also try to salvage facts/options if present, but a message alone is enough
        return { message: msg.slice(0, 400), facts: [], done: false };
      }
      // 2) if it's plain prose (no/!broken JSON), show it as the reply
      const stripped = raw.replace(/^[\[{]/, "").replace(/[\]}]$/, "").trim();
      if (raw && raw[0] !== "{" && raw[0] !== "[") return { message: raw.slice(0, 400), facts: [], done: false };
      if (stripped && stripped.length > 4 && !stripped.includes('"')) return { message: stripped.slice(0, 400), facts: [], done: false };
      throw e;
    }
  };

  const applyConvBid = (d) => {
    const lo = num(d.priceLow), hi = num(d.priceHigh);
    if (lo || hi) {
      const opts = Array.isArray(d.primaryOptions) ? d.primaryOptions.slice(0, 3).map((o) => ({
        tier: String(o.tier || ""), name: String(o.name || ""), why: String(o.why || ""), url: String(o.url || ""),
      })).filter((o) => o.name) : [];
      setConvBid((prev) => ({ priceLow: lo, priceHigh: hi, days: num(d.days) || 1, confidence: String(d.confidence || "low"), primaryOptions: opts, chosen: (prev && prev.chosen) || null }));
    }
    if (Array.isArray(d.facts)) setConvFacts(d.facts.map(String).slice(0, 12));
    setConvOptions(Array.isArray(d.options) ? d.options.slice(0, 4).map(String).filter(Boolean) : []);
  };

  // one shared submit path for typing, choice buttons, and material-tier picks
  const convSubmit = async (textArg) => {
    const text = (textArg != null ? textArg : convInput).trim();
    const firstUserTurn = !convMsgs.some((m) => m.role === "me");
    const sendPhotos = firstUserTurn && convPhotos.length > 0;
    if (!text && !sendPhotos) return;
    if (convBusy) return;
    const meMsg = { role: "me", text: text || "(see the photos I added)" };
    const msgs = [...convMsgs, meMsg];
    setConvMsgs(msgs);
    setConvInput("");
    setConvOptions([]); // clear old buttons once an answer is given
    setConvStarted(true);
    setConvBusy(true);
    // one automatic retry before we ever tell the user it failed (kills false "didn't go through")
    let d = null, err = null;
    for (let attempt = 0; attempt < 2 && !d; attempt++) {
      try { d = await convCall(msgs, sendPhotos); }
      catch (e) { err = e; if (attempt === 0) await new Promise((r) => setTimeout(r, 900)); }
    }
    if (d) {
      applyConvBid(d);
      setConvMsgs([...msgs, { role: "ai", text: String(d.message || "Got it — go on?") }]);
      if (d.done) setConvDone(true);
    } else {
      // genuine failure after a retry — keep the user's message, let them resend, don't wipe progress
      setConvMsgs([...msgs, { role: "ai", text: "I didn't quite catch that one — mind sending it again?" }]);
    }
    setConvBusy(false);
  };
  const convSend = () => convSubmit(convInput);
  const convPickOption = (opt) => { if (!convBusy) convSubmit(opt); };
  const convPickTier = (opt) => {
    if (convBusy) return;
    setConvBid((b) => b ? { ...b, chosen: { tier: opt.tier, name: opt.name } } : b);
    const label = (opt.tier ? opt.tier + " — " : "") + opt.name;
    convSubmit("I'd like the " + label + " option.");
  };

  const handleConvReport = async (file) => {
    if (!file) return;
    setConvBusy(true);
    try {
      const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name || "");
      let block;
      if (isPdf) {
        if (file.size > 28 * 1024 * 1024) throw new Error("PDF over 28MB");
        block = { type: "document", source: { type: "base64", media_type: "application/pdf", data: await fileToB64(file) } };
      } else {
        const b64 = (await imageToJpeg(file, 2000)).split(",")[1];
        block = { type: "image", source: { type: "base64", media_type: "image/jpeg", data: b64 } };
      }
      const text = await callClaude([{ role: "user", content: [block, { type: "text", text: EV_PROMPT }] }]);
      const d = parseJSON(text);
      if (!d.summary || !String(d.summary).trim()) throw new Error("No measurements found");
      const measure = "I uploaded a measurement report. Key numbers: " + String(d.summary).slice(0, 400);
      const msgs = [...convMsgs, { role: "me", text: measure }];
      setConvMsgs(msgs);
      flash("Report read — measurements added to the chat.");
      // let AL respond using the new measurements
      const dd = await convCall(msgs, false);
      applyConvBid(dd);
      setConvMsgs([...msgs, { role: "ai", text: String(dd.message || "Got those measurements, thanks!") }]);
      if (dd.done) setConvDone(true);
    } catch (e) { flash("Couldn't read that report — try a screenshot of the summary page, or just tell me the numbers."); }
    setConvBusy(false);
  };
  const convReset = () => {
    setConvMsgs([]); setConvInput(""); setConvStarted(false); setConvBid(null);
    setConvFacts([]); setConvDone(false); setConvPhotos([]); setConvOptions([]); setConvConfirmReset(false); setAddrPublic(false); convGreeting.current = false;
  };
  const handleReport = async (file) => {
    if (!file) return;
    setBusy("report");
    try {
      const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name || "");
      let block;
      if (isPdf) {
        if (file.size > 28 * 1024 * 1024) throw new Error("PDF over 28MB");
        block = { type: "document", source: { type: "base64", media_type: "application/pdf", data: await fileToB64(file) } };
      } else {
        const b64 = (await imageToJpeg(file, 2000)).split(",")[1];
        block = { type: "image", source: { type: "base64", media_type: "image/jpeg", data: b64 } };
      }
      const text = await callClaude([{ role: "user", content: [block, { type: "text", text: EV_PROMPT }] }]);
      const d = parseJSON(text);
      if (!d.summary || !String(d.summary).trim()) throw new Error("No measurements found in that file");
      setRoofDims("Measurements: " + String(d.summary).slice(0, 400));
      flash("Report read — measurements attached to your job.");
    } catch (e) { flash("Report parse failed: " + errMsg(e) + ". Try the PDF or paste the numbers."); }
    setBusy("");
  };
  const parsePaste = async () => {
    if (!pasteText.trim()) { flash("Paste the report numbers first."); return; }
    setBusy("report");
    try {
      const text = await callClaude([{ role: "user", content: EV_PROMPT + "\n\nReport text:\n" + pasteText.trim() }]);
      const d = parseJSON(text);
      if (!d.summary || !String(d.summary).trim()) throw new Error("No measurements found");
      setRoofDims("Measurements: " + String(d.summary).slice(0, 400));
      setPasteOpen(false); setPasteText("");
      flash("Measurements attached to your job.");
    } catch (e) { flash("Parse failed: " + errMsg(e)); }
    setBusy("");
  };
  const tightenPrice = () => {
    const miss = (bidPreview && bidPreview.missing) || [];
    if (miss.length) {
      // turn each missing item into a plain question and jump straight to the answer form
      const qs = miss.map((m) => {
        const t = String(m).trim();
        return /\?$/.test(t) ? t : "What's the " + t.replace(/^the\s+/i, "") + "?";
      });
      setBidPreview(null);
      setAnswers({});
      setQuestions(qs);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      askQuestions();
    }
  };
  const askQuestions = async () => {
    if (!desc.trim() && !photos.length) { flash("Add a description or photos first."); return; }
    setBusy("ask");
    setBidPreview(null);
    setQuestions(null);
    setAnswers({});
    setPriorQA([]); // first-round questions = fresh estimate, clear any accumulated Q&A
    try {
      const qprompt =
        "You are an experienced contractor about to price a residential job. Before you quote, ask the homeowner the 2-3 MOST important questions whose answers would most change the price or scope for THIS specific job. Keep them short, plain-English, and answerable in a few words (e.g. material choice, square footage, number of layers, access, finish level). Do NOT ask things already answered.\n" +
        "HOMEOWNER REQUEST: " + (desc.trim() || "(see photos)") + "\n" +
        (roofDims ? "MEASUREMENTS ALREADY PROVIDED: " + roofDims + "\n" : "") +
        (photos.length ? "Photos are attached.\n" : "") +
        "Respond with ONLY raw JSON, no markdown: {\"questions\": [up to 3 short question strings]}. If you truly need nothing, return {\"questions\": []}.";
      const qcontent = [
        ...photos.slice(0, 2).map((p) => {
          const mt = p.startsWith("data:") ? (p.substring(5, p.indexOf(";")) || "image/jpeg") : "image/jpeg";
          return { type: "image", source: { type: "base64", media_type: mt, data: p.split(",")[1] } };
        }),
        { type: "text", text: qprompt },
      ];
      let qtext;
      try { qtext = await callClaude([{ role: "user", content: qcontent }]); }
      catch (e1) { qtext = await callClaude([{ role: "user", content: qprompt }]); }
      const qd = parseJSON(qtext);
      const qs = Array.isArray(qd.questions) ? qd.questions.slice(0, 3).map(String).filter((x) => x.trim()) : [];
      if (qs.length === 0) { setBusy(""); getBid(); return; }
      setQuestions(qs);
    } catch (e) {
      // if question step fails, just price directly
      setBusy(""); getBid(); return;
    }
    setBusy("");
  };
  const getBid = async () => {
    if (!desc.trim() && !photos.length) { flash("Add a description or photos first."); return; }
    setBusy("bid");
    setBidPreview(null);
    try {
      // fold this round's answered questions into the running list so later rounds never lose earlier facts
      const thisRound = (questions || []).map((q, i) => ({ q: String(q), a: (answers[i] || "").trim() }))
        .filter((x) => x.a);
      const allQA = [...priorQA, ...thisRound];
      const qa = allQA.length
        ? "HOMEOWNER-PROVIDED DETAILS (use ALL of these — they are confirmed facts, do not re-estimate anything already answered here):\n" + allQA.map((x) => "- " + x.q + " " + x.a).join("\n") + "\n"
        : "";
      const addr = (sameAddr ? profH.address : jobAddr).trim();
      // pull recent closed jobs from the local price library as real reference points
      const histRef = (() => {
        if (!priceLib.length) return "";
        const recent = priceLib.slice(0, 12)
          .map((h) => "- " + (h.title || "job") + (h.town ? " (" + h.town + ")" : "") + ": sold at " + $0(h.sold) + (h.mh ? ", " + h.mh + " MH" : ""))
          .join("\n");
        return "REAL LOCAL CLOSED-JOB HISTORY (actual prices similar jobs sold at near here — weight your estimate toward these real numbers when the scope matches):\n" + recent + "\n";
      })();
      const prompt =
        "You are an experienced general contractor estimator pricing residential work near " + (profH.town || "upstate New York") + ".\n" +
        histRef +
        "HOMEOWNER REQUEST: " + (desc.trim() || "(see photos)") + "\n" +
        qa +
        (roofDims ? "MEASUREMENTS PROVIDED: " + roofDims + "\n" : "") +
        (photos.length ? "Photos attached — judge scope, size, materials, and condition from them.\n" : "") +
        (addr ? "PROPERTY ADDRESS: " + addr + "\n" : "") +
        "STEP 1 - Decide if this scope is SIZE-DEPENDENT (full roof, whole-house siding, large deck — where square footage drives price) or NOT (faucet, one window, small leak).\n" +
        "STEP 2 - If size-dependent AND no measurements provided AND an address is given, use your best ROUGH estimate of the home's size from the address to inform the price and set usedEstimate true. Otherwise set usedEstimate false and ignore the address for sizing. Even with an estimate, keep the range tight — do not blow it out.\n" +
        (() => {
          // pull any FRESH cached cost data for this region so the AI can skip those searches
          const region = (profH.town || "").toLowerCase().trim() || "_region";
          const now = Date.now();
          const fresh = [];
          for (const k of Object.keys(costCache)) {
            const c = costCache[k];
            if (!c || c.region !== region) continue;
            const ageDays = (now - new Date(c.at).getTime()) / 86400000;
            if (ageDays <= CACHE_FRESH_DAYS) {
              if (c.kind === "labor") fresh.push("- Burdened labor rate for " + c.trade + ": $" + c.value + "/hr (cached " + Math.round(ageDays) + "d ago — reuse, do NOT search)");
              if (c.kind === "tax") fresh.push("- Local sales tax rate: " + c.value + " (cached — reuse, do NOT search)");
              if (c.kind === "material") fresh.push("- " + c.label + ": $" + c.value + " (cached " + Math.round(ageDays) + "d ago — reuse unless this job differs)");
            }
          }
          return fresh.length
            ? "CACHED LOCAL COST DATA (already verified recently — REUSE these and do NOT spend a search on them; only search for figures NOT listed here or that are job-specific):\n" + fresh.join("\n") + "\n"
            : "";
        })() +
        "STEP 3 - Build a BOTTOM-UP cost estimate. Use web search ONLY for figures not already provided as cached above. Verify CURRENT " + new Date().getFullYear() + " local figures for THIS region:\n" +
        "  a) BURDENED labor rate per man-hour for this trade — wage + payroll taxes + workers comp + insurance. IMPORTANT: use the rate a SMALL, RURAL/SMALL-MARKET contractor actually pays, NOT inflated metro, union, or big-city numbers. For most trades in a rural/small upstate market this burdened COST is roughly $45-70/hr, not $90-110. Pick a realistic figure in that lower band unless the trade is genuinely high-skill (electrical/HVAC can run higher). Do not overstate this — it is the single biggest source of over-pricing.\n" +
        "  b) Current MATERIAL cost for the full scope (quality materials an established contractor would use).\n" +
        "  c) Local SALES TAX rate on materials (as a decimal, e.g. 0.08).\n" +
        "  d) EQUIPMENT + DISPOSAL cost for the scope (dumpsters/haul-off, lifts, rentals). Heavy tear-offs (cedar shake, multiple layers) need MORE dumpster pulls and higher tonnage fees — scale this up for heavy/messy scopes, do not use a flat small number.\n" +
        "  e) Total MAN-HOURS the scope realistically takes an established crew (include tear-off/disposal, setup, install, cleanup).\n" +
        "  DIFFICULTY SCALING — this is critical: a simple single-layer asphalt strip on a low/medium pitch is FAST. But hard scopes take MUCH longer and you must scale hours and disposal UP accordingly:\n" +
        "    • Cedar shake / wood shake tear-off: very slow, heavy, labor-punishing — can be 1.5-2.5x the hours of an asphalt strip, plus far more disposal weight/dumpsters.\n" +
        "    • Multiple layers (2+): each extra layer adds significant tear-off hours and disposal.\n" +
        "    • Steep pitch (8/12+), complex/hipped/cut-up roofs, multiple stories, hard access: add hours for safety, staging, slower movement, more waste.\n" +
        "    • Full re-deck / sheathing replacement: a whole extra labor pass over the roof.\n" +
        "  Do NOT price a hard tear-off like an easy reroof. Match the hours and disposal to the REAL difficulty of THIS scope.\n" +
        "Estimate like an established, fully-insured contractor with a real crew — not a handyman. Be REALISTIC and accurate on hours and materials — do not pad them. The goal is a true cost basis, neither lowballed nor inflated.\n" +
        "Do NOT compute the final price yourself — just return the cost components. After searching, respond with ONLY raw JSON, no markdown, no commentary: {\"title\": short job name, \"summary\": 1-2 friendly sentences, \"includes\": [max 6 short bullets of scope], \"manHours\": number, \"laborRate\": burdened $/hr number, \"materials\": $ number, \"taxRate\": decimal, \"equipment\": $ number, \"days\": days on site, \"usedEstimate\": boolean, \"trade\": one-word trade like roofing/siding/decking/gutters, \"confidence\": \"high\" if you had clear measurements/photos/detail, \"medium\" if reasonable but some gaps, \"low\" if the description was vague or key facts (size, materials, condition) were missing, \"missing\": [up to 3 short specific things that would most improve the price, e.g. 'roof size or measurement report', 'number of layers to tear off', 'siding material preference'], \"note\": one line on what could change the price}";
      const content = [
        ...photos.slice(0, 3).map((p) => {
          const mt = p.startsWith("data:") ? (p.substring(5, p.indexOf(";")) || "image/jpeg") : "image/jpeg";
          return { type: "image", source: { type: "base64", media_type: mt, data: p.split(",")[1] } };
        }),
        { type: "text", text: prompt },
      ];
      let text, photosDropped = false;
      try {
        text = await callClaudeBackground([{ role: "user", content }], { search: true, maxTokens: 1600 });
      } catch (e1) {
        const m = (e1.message || "").toLowerCase();
        const flaky = m.includes("network") || m.includes("invalid response format") || m.includes("empty reply");
        if (photos.length && flaky) {
          photosDropped = true;
          text = await callClaudeBackground([{ role: "user", content: prompt + "\n(Photos could not be attached this time - price conservatively from the description alone and widen the range to cover the extra unknowns.)" }], { search: true, maxTokens: 1600 });
        } else throw e1;
      }
      const d = parseJSON(text);
      if (photosDropped) flash("Heads up: photos couldn't reach the AI this time, so this bid is from your description only.");
      const mh = num(d.manHours), rate = num(d.laborRate), mats = num(d.materials);
      const taxRate = num(d.taxRate) || 0.08, equip = num(d.equipment);
      const labor = mh * rate;
      const matTax = mats * taxRate;
      const costBase = labor + mats + matTax + equip;
      if (!costBase) throw new Error("Couldn't build a cost estimate — add more detail");
      // write reusable, slow-changing cost data back to the cache for future estimates
      (() => {
        const region = (profH.town || "").toLowerCase().trim() || "_region";
        const trade = String(d.trade || "general").toLowerCase().trim();
        const at = new Date().toISOString();
        const next = { ...costCache };
        if (rate) next["labor:" + trade + ":" + region] = { kind: "labor", trade, region, value: Math.round(rate), at };
        if (taxRate) next["tax:" + region] = { kind: "tax", region, value: taxRate, at };
        setCostCache(next);
        pSet(COSTCACHE_KEY, next);
      })();
      // gross margin range: price = cost / (1 - margin); 28% low end, 35% high end
      let priceLow = Math.round(costBase / (1 - 0.28) / 50) * 50;
      let priceHigh = Math.round(costBase / (1 - 0.35) / 50) * 50;
      // confidence-based widening: when the AI had thin info, widen the range to be honest about uncertainty
      const conf = String(d.confidence || "medium").toLowerCase();
      const photosDroppedNow = photosDropped;
      let widen = 0;
      if (conf === "low" || photosDroppedNow) widen = 0.18;
      else if (conf === "medium") widen = 0.07;
      if (widen > 0) {
        const mid = (priceLow + priceHigh) / 2;
        priceLow = Math.round((mid - (mid - priceLow) - mid * widen) / 50) * 50;
        priceHigh = Math.round((mid + (priceHigh - mid) + mid * widen) / 50) * 50;
        if (priceLow < 0) priceLow = 0;
      }
      const missing = Array.isArray(d.missing) ? d.missing.slice(0, 3).map(String) : [];
      setPriorQA(allQA); // remember everything answered so far for any further tightening round
      setBidPreview({
        title: String(d.title || "Your project"), summary: String(d.summary || ""),
        includes: Array.isArray(d.includes) ? d.includes.slice(0, 6).map(String) : [],
        priceLow, priceHigh,
        days: num(d.days) || 1, mh,
        cost: { labor: Math.round(labor), mats: Math.round(mats), matTax: Math.round(matTax), equip: Math.round(equip), base: Math.round(costBase), rate: Math.round(rate), taxRate },
        note: String(d.note || ""),
        usedEstimate: !!d.usedEstimate && !roofDims,
        confidence: conf, missing,
      });
      setQuestions(null);
    } catch (e) { flash("Bid failed: " + errMsg(e)); }
    setBusy("");
  };

  /* ----- post / apply / choose / complete / rate ----- */
  const postJob = async () => {
    if (!bidPreview) return;
    if (!profH.name || !profH.contact) { flash("Save your name and contact on the Profile tab first — the matched pro needs a way to reach you."); goTab("profile"); return; }
    if (photos.length > 0 && !privacyOk) { flash("Please check the box confirming your photos can be shared before posting."); return; }
    setBusy("post");
    try {
      await saveProfileQuiet("homeowner");
      const smallPhotos = [];
      for (const ph of photos.slice(0, 2)) {
        try { smallPhotos.push(await dataUrlResize(ph, 640, 0.55)); } catch (e) { /* skip photo */ }
      }
      const job = {
        id: rid(), createdAt: new Date().toISOString(), status: "open",
        homeownerUid: me.uidH, homeownerName: profH.name, contact: profH.contact, town: profH.town || "", address: (sameAddr ? profH.address : jobAddr).trim(), addrPublic,
        desc: desc.trim(), roofDims, photos: smallPhotos,
        ...bidPreview, price: Math.round((bidPreview.priceLow + bidPreview.priceHigh) / 2), usedEstimate: !!bidPreview.usedEstimate,
        applicants: [], chosen: null,
      };
      await sSet(JOB_KEY(job.id), job);
      const ids = (await sGet(JOB_INDEX)) || [];
      await sSet(JOB_INDEX, [job.id, ...ids.filter((x) => x !== job.id)].slice(0, 120));
      setMe((m) => ({ ...m, mine: [job.id, ...m.mine].slice(0, 30) }));
      setDesc(""); setPhotos([]); setRoofDims(""); setBidPreview(null); setQuestions(null); setAnswers({}); setPriorQA([]); setPrivacyOk(false); setJobAddr(""); setSameAddr(true);
      pSet(DRAFT_KEY, { desc: "", roofDims: "" });
      goTab("myjobs");
      await refreshBoard();
      flash("Job posted ✓ Interested pros will show up here — you pick who gets it.");
      demoApply(job);
    } catch (e) { flash("Post failed: " + errMsg(e)); }
    setBusy("");
  };
  const postConvJob = async () => {
    if (!convBid) return;
    if (!profH.name || !profH.contact) { flash("Save your name and contact on the Profile tab first — the matched pro needs a way to reach you."); goTab("profile"); return; }
    if (convPhotos.length > 0 && !privacyOk) { flash("Please check the box confirming your photos can be shared before posting."); return; }
    setBusy("post");
    try {
      await saveProfileQuiet("homeowner");
      const smallPhotos = [];
      for (const ph of convPhotos.slice(0, 2)) {
        try { smallPhotos.push(await dataUrlResize(ph, 640, 0.55)); } catch (e) { /* skip */ }
      }
      const summary = convFacts.length ? convFacts.join("; ") : (convMsgs.find((m) => m.role === "me") || {}).text || "Project";
      const title = (convMsgs.find((m) => m.role === "me") || {}).text || "Project";
      const job = {
        id: rid(), createdAt: new Date().toISOString(), status: "open",
        homeownerUid: me.uidH, homeownerName: profH.name, contact: profH.contact, town: profH.town || "", address: (profH.address || "").trim(), addrPublic,
        desc: summary, roofDims: "", photos: smallPhotos,
        title: String(title).slice(0, 60), summary, includes: convFacts.slice(0, 6),
        priceLow: convBid.priceLow, priceHigh: convBid.priceHigh, days: convBid.days,
        price: Math.round((convBid.priceLow + convBid.priceHigh) / 2),
        confidence: convBid.confidence, usedEstimate: false,
        applicants: [], chosen: null,
      };
      await sSet(JOB_KEY(job.id), job);
      const ids = (await sGet(JOB_INDEX)) || [];
      await sSet(JOB_INDEX, [job.id, ...ids.filter((x) => x !== job.id)].slice(0, 120));
      setMe((m) => ({ ...m, mine: [job.id, ...m.mine].slice(0, 30) }));
      convReset(); setPrivacyOk(false);
      goTab("myjobs");
      await refreshBoard();
      flash("Estimate posted ✓ Local pros will apply — you pick who gets it.");
      demoApply(job);
    } catch (e) { flash("Post failed: " + errMsg(e)); }
    setBusy("");
  };
  const demoApply = async (job) => {
    // a couple of demo contractors raise their hand, with different bids, so the
    // homeowner sees a real "pick your pro" moment even with no real contractors around
    const demoPros = [
      { uid: "demo-co-1", company: "North Country Roofing", factor: 0.93 },
      { uid: "demo-co-3", company: "Adirondack Home Pros", factor: 1.07 },
    ];
    const lo = num(job.priceLow) || job.price, hi = num(job.priceHigh) || job.price;
    demoPros.forEach((dp, i) => {
      setTimeout(async () => {
        try {
          const fresh = await sGet(JOB_KEY(job.id));
          if (!fresh || fresh.status !== "open") return;
          if ((fresh.applicants || []).some((a) => a.uid === dp.uid)) return;
          const mid = Math.round((lo + hi) / 2);
          const bid = Math.max(lo, Math.min(hi, Math.round(mid * dp.factor / 50) * 50));
          fresh.applicants = [...(fresh.applicants || []), { uid: dp.uid, company: dp.company, bid, at: new Date().toISOString(), demo: true }];
          await sSet(JOB_KEY(fresh.id), fresh);
          if (tab === "myjobs" || tab === "feed") await refreshBoard();
        } catch (e) { /* best effort */ }
      }, 4000 + i * 5000 + Math.random() * 1500);
    });
  };

  const myPlan = PLANS.find((pl) => pl.id === me.plan) || null;
  const monthApps = board.filter((j) => {
    const a = (j.applicants || []).find((x) => x.uid === me.uidC);
    if (!a) return false;
    const d = new Date(a.at || j.createdAt);
    const now = new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;

  const genMaterials = async (job) => {
    setMatBusy(job.id);
    try {
      const prompt =
        "You are a contractor estimator. For this residential job, list the main materials needed with rough quantities and any relevant dimensions, so a contractor can sanity-check their bid. Keep it practical and concise.\n" +
        "JOB: " + (job.title || "") + " — " + (job.summary || job.desc || "") + "\n" +
        (job.roofDims ? "MEASUREMENTS: " + job.roofDims + "\n" : "") +
        "Respond with ONLY raw JSON, no markdown: {\"items\": [{\"name\": material, \"qty\": \"quantity with unit, e.g. 32 squares or 8 sheets\"}], \"note\": one short line on dimensions or assumptions}. Max 12 items.";
      const text = await callClaude([{ role: "user", content: prompt }]);
      const d = parseJSON(text);
      const items = Array.isArray(d.items) ? d.items.slice(0, 12).map((x) => ({ name: String(x.name || ""), qty: String(x.qty || "") })).filter((x) => x.name) : [];
      setMatLists((m) => ({ ...m, [job.id]: { items, note: String(d.note || ""), open: true } }));
    } catch (e) { flash("Material list failed: " + errMsg(e)); }
    setMatBusy("");
  };
  const updateMat = (jobId, idx, field, val) => {
    setMatLists((m) => {
      const cur = m[jobId] || { items: [], note: "", open: true };
      const items = cur.items.map((it, i) => i === idx ? { ...it, [field]: val } : it);
      return { ...m, [jobId]: { ...cur, items } };
    });
  };
  const addMatRow = (jobId) => setMatLists((m) => {
    const cur = m[jobId] || { items: [], note: "", open: true };
    return { ...m, [jobId]: { ...cur, items: [...cur.items, { name: "", qty: "" }] } };
  });
  const removeMatRow = (jobId, idx) => setMatLists((m) => {
    const cur = m[jobId] || { items: [], note: "", open: true };
    return { ...m, [jobId]: { ...cur, items: cur.items.filter((_, i) => i !== idx) } };
  });
  const applyJob = async (job, myBid) => {
    if (!profC.company) { flash("Save your company profile first — homeowners pick from profiles."); goTab("profile"); return; }
    if (!myPlan) { flash("Pick a subscription on the Profile tab to start applying."); goTab("profile"); return; }
    if (myPlan.limit && monthApps >= myPlan.limit) { flash("You've used your " + myPlan.limit + " Starter applications this month — upgrade to Pro for unlimited."); goTab("profile"); return; }
    setBusy("apply-" + job.id);
    try {
      await saveProfileQuiet("contractor");
      const fresh = await sGet(JOB_KEY(job.id));
      if (!fresh || fresh.status !== "open") { flash("That job's already matched."); await refreshBoard(); setBusy(""); return; }
      if ((fresh.applicants || []).some((a) => a.uid === me.uidC)) { flash("You're already on the list for this one."); setBusy(""); return; }
      fresh.applicants = [...(fresh.applicants || []), { uid: me.uidC, company: profC.company, bid: myBid || job.price, at: new Date().toISOString() }];
      await sSet(JOB_KEY(fresh.id), fresh);
      await refreshBoard();
      flash("You're in ✓ The homeowner reviews interested pros and picks one.");
      demoHire(fresh);
    } catch (e) { flash("Apply failed: " + errMsg(e)); }
    setBusy("");
  };
  const demoHire = async (job) => {
    // if this is a demo job, the demo homeowner "hires" the real contractor after a moment
    const isDemoJob = job.demo || (job.homeownerUid && String(job.homeownerUid).startsWith("demo-"));
    if (!isDemoJob) return;
    setTimeout(async () => {
      try {
        const fresh = await sGet(JOB_KEY(job.id));
        if (!fresh || fresh.status !== "open") return;
        if (!(fresh.applicants || []).some((a) => a.uid === me.uidC)) return;
        fresh.chosen = me.uidC;
        fresh.status = "matched";
        fresh.matchedAt = new Date().toISOString();
        await sSet(JOB_KEY(fresh.id), fresh);
        await refreshBoard();
        setParty({ title: "You got the job!", sub: (fresh.homeownerName || "The homeowner") + " (demo) picked you — messaging is open" });
      } catch (e) { /* best effort */ }
    }, 4000 + Math.random() * 2000);
  };
  const passJob = (id) => setMe((m) => ({ ...m, passed: [...m.passed, id].slice(-100) }));

  const recordSoldPrice = (job, soldPrice) => {
    if (!soldPrice) return;
    const entry = {
      title: job.title || "", scope: (job.summary || job.desc || "").slice(0, 200),
      town: job.town || "", sold: soldPrice,
      low: num(job.priceLow), high: num(job.priceHigh),
      mh: num(job.mh), at: new Date().toISOString(),
    };
    setPriceLib((prev) => {
      const next = [entry, ...prev].slice(0, 200);
      pSet(PRICELIB_KEY, next);
      return next;
    });
  };
  const chooseContractor = async (job, uid) => {
    setBusy("choose-" + job.id + uid);
    try {
      const fresh = await sGet(JOB_KEY(job.id));
      if (!fresh || fresh.status !== "open") { flash("This job is already matched."); await refreshBoard(); setBusy(""); return; }
      fresh.chosen = uid;
      fresh.status = "matched";
      fresh.matchedAt = new Date().toISOString();
      const winner = (fresh.applicants || []).find((a) => a.uid === uid);
      const soldPrice = num(winner && winner.bid) || num(fresh.price);
      recordSoldPrice(fresh, soldPrice);
      await sSet(JOB_KEY(fresh.id), fresh);
      const u = users[uid];
      setParty({ title: "It's a match!", sub: (u ? u.company : "Your pro") + " is on the job — messaging is now open" });
      await refreshBoard();
    } catch (e) { flash("Couldn't match: " + errMsg(e)); }
    setBusy("");
  };
  const deleteJob = async (job) => {
    if (confirmDel !== job.id) {
      setConfirmDel(job.id);
      setTimeout(() => setConfirmDel((c) => (c === job.id ? "" : c)), 4000);
      return;
    }
    setConfirmDel("");
    setBusy("del-" + job.id);
    try {
      try { await window.storage.delete(JOB_KEY(job.id), true); } catch (e) { /* may already be gone */ }
      const ids = (await sGet(JOB_INDEX)) || [];
      await sSet(JOB_INDEX, ids.filter((x) => x !== job.id));
      setMe((m) => ({ ...m, mine: m.mine.filter((x) => x !== job.id) }));
      await refreshBoard();
      flash("Job deleted.");
    } catch (e) { flash("Delete failed: " + errMsg(e)); }
    setBusy("");
  };
  const openEdit = (job) => { setEditJob(job.id); setEditText(job.desc || ""); };
  const saveEdit = async (job) => {
    setBusy("edit-" + job.id);
    try {
      const fresh = await sGet(JOB_KEY(job.id));
      if (!fresh) throw new Error("job not found");
      fresh.desc = editText.trim();
      await sSet(JOB_KEY(fresh.id), fresh);
      setEditJob(null); setEditText("");
      await refreshBoard();
      flash("Job updated. (Price unchanged — delete and repost if the scope changed a lot.)");
    } catch (e) { flash("Update failed: " + errMsg(e)); }
    setBusy("");
  };
  const autoArchive = async (jobs) => {
    const mine = jobs.filter((j) =>
      (j.status === "matched" || j.status === "complete") &&
      (j.homeownerUid === me.uidH || j.chosen === me.uidC)
    );
    if (!mine.length) return;
    const snaps = [];
    for (const j of mine.slice(0, 30)) {
      let chat = [];
      try { chat = (await sGet(CHAT_KEY(j.id))) || []; } catch (e) { /* keep prior */ }
      snaps.push({ ...j, archivedChat: chat, archivedAt: new Date().toISOString() });
    }
    setArchived((prev) => {
      const byId = {};
      for (const a of prev) byId[a.id] = a;
      for (const sn of snaps) {
        // keep the richer chat if the live one is somehow empty
        const old = byId[sn.id];
        if (old && (!sn.archivedChat || !sn.archivedChat.length) && old.archivedChat && old.archivedChat.length) {
          sn.archivedChat = old.archivedChat;
        }
        byId[sn.id] = sn;
      }
      const next = Object.values(byId).sort((a, b) => (b.archivedAt || "").localeCompare(a.archivedAt || "")).slice(0, 150);
      pSet(ARCHIVE_KEY, next);
      return next;
    });
  };
  const archiveJob = async (job) => {
    try {
      const chat = (await sGet(CHAT_KEY(job.id))) || [];
      const snap = { ...job, archivedChat: chat, archivedAt: new Date().toISOString() };
      setArchived((prev) => {
        const next = [snap, ...prev.filter((x) => x.id !== job.id)].slice(0, 100);
        pSet(ARCHIVE_KEY, next);
        return next;
      });
    } catch (e) { /* best effort */ }
  };
  const markDone = async (job) => {
    try {
      const fresh = await sGet(JOB_KEY(job.id));
      if (!fresh) return;
      fresh.status = "complete";
      fresh.completedAt = new Date().toISOString();
      await sSet(JOB_KEY(fresh.id), fresh);
      await archiveJob(fresh);
      await refreshBoard();
      flash("Marked complete ✓ Saved to your job history. Leave a rating — reviews keep the board honest.");
      demoRate(fresh);
    } catch (e) { flash("Update failed: " + errMsg(e)); }
  };
  const demoRate = async (job) => {
    // if either party is a demo account, that demo party leaves the tester a believable rating + comment
    const hoDemo = job.homeownerUid && String(job.homeownerUid).startsWith("demo-");
    const coDemo = job.chosen && String(job.chosen).startsWith("demo-");
    // demo HO rates the real contractor (ofContractor); demo CO rates the real homeowner (ofHomeowner)
    const who = hoDemo ? "ofContractor" : coDemo ? "ofHomeowner" : null;
    if (!who) return;
    setTimeout(async () => {
      try {
        const fresh = await sGet(JOB_KEY(job.id));
        if (!fresh || (fresh.ratings && fresh.ratings[who])) return;
        const subject = who === "ofContractor" ? "the contractor's work on this job" : "the homeowner (communication, access, payment)";
        const prompt =
          "You just completed a home-contracting job through an app and are leaving the other party a short, believable review. Rate " + subject + ".\n" +
          "JOB: " + (fresh.title || "") + " — " + (fresh.summary || fresh.desc || "") + "\n" +
          "Respond with ONLY raw JSON, no markdown: {\"stars\": integer 4 or 5, \"comment\": one friendly sentence under 100 chars}.";
        let stars = 5, comment = "Great to work with — smooth job.";
        try {
          const text = await callClaude([{ role: "user", content: prompt }], { background: true });
          const d = parseJSON(text);
          if (d.stars) stars = Math.max(1, Math.min(5, num(d.stars)));
          if (d.comment) comment = String(d.comment).slice(0, 120);
        } catch (e) { /* use fallback */ }
        fresh.ratings = { ...(fresh.ratings || {}), [who]: { stars, comment, at: new Date().toISOString(), demo: true } };
        await sSet(JOB_KEY(fresh.id), fresh);
        await archiveJob(fresh);
        await refreshBoard();
        flash("⭐ " + (who === "ofContractor" ? (fresh.homeownerName || "The homeowner") : "The pro") + " (demo) left you a review!");
      } catch (e) { /* best effort */ }
    }, 3000 + Math.random() * 2000);
  };
  const submitRating = async (job, who, starsVal, comment) => {
    setBusy("rate-" + job.id + who);
    try {
      const fresh = await sGet(JOB_KEY(job.id));
      if (!fresh) throw new Error("job not found");
      fresh.ratings = { ...(fresh.ratings || {}), [who]: { stars: starsVal, comment: (comment || "").slice(0, 140), at: new Date().toISOString() } };
      await sSet(JOB_KEY(fresh.id), fresh);
      if (fresh.status === "complete") await archiveJob(fresh);
      await refreshBoard();
      flash("Rating saved ✓");
      demoRate(fresh);
    } catch (e) { flash("Rating failed: " + errMsg(e)); }
    setBusy("");
  };

  /* ----- messaging ----- */
  const markRead = (jobId, count) => {
    setMe((m) => ({ ...m, readMsgs: { ...(m.readMsgs || {}), [jobId]: count } }));
    setUnread((u) => { const c = { ...u }; delete c[jobId]; return c; });
  };
  const openChat = async (job) => {
    setChatJob(job);
    setViewing(null);
    let msgs = (await sGet(CHAT_KEY(job.id))) || [];
    if (!msgs.length && job.archivedChat) msgs = job.archivedChat;
    setChatMsgs(msgs);
    markRead(job.id, msgs.length);
    setTimeout(() => chatEnd.current && chatEnd.current.scrollIntoView({ block: "end" }), 80);
  };
  const refreshChat = async (manual) => {
    if (!chatJob) return;
    const msgs = (await sGet(CHAT_KEY(chatJob.id))) || [];
    setChatMsgs((prev) => {
      if (manual || msgs.length !== prev.length) {
        setTimeout(() => chatEnd.current && chatEnd.current.scrollIntoView({ block: "end" }), 80);
        markRead(chatJob.id, msgs.length);
        return msgs;
      }
      return prev;
    });
  };
  const sendMsg = async () => {
    if (!chatText.trim() || !chatJob) return;
    setBusy("send");
    try {
      const isCo = me.role === "contractor";
      const msg = {
        id: rid(), from: isCo ? me.uidC : me.uidH,
        name: isCo ? (profC.company || "Contractor") : (profH.name || "Homeowner"),
        text: chatText.trim().slice(0, 500), at: new Date().toISOString(),
      };
      const fresh = ((await sGet(CHAT_KEY(chatJob.id))) || []);
      const next = [...fresh, msg].slice(-100);
      await sSet(CHAT_KEY(chatJob.id), next);
      setChatMsgs(next);
      markRead(chatJob.id, next.length);
      setChatText("");
      setTimeout(() => chatEnd.current && chatEnd.current.scrollIntoView({ block: "end" }), 60);
      maybeDemoReply(chatJob, next);
    } catch (e) { flash("Send failed: " + errMsg(e)); }
    setBusy("");
  };
  const maybeDemoReply = async (job, history) => {
    // Is the OTHER party in this chat a demo account?
    const isCo = me.role === "contractor";
    const otherUid = isCo ? job.homeownerUid : job.chosen;
    const otherIsDemo = (otherUid && String(otherUid).startsWith("demo-")) || job.demo;
    if (!otherIsDemo) return;
    const otherUser = users[otherUid] || {};
    const otherName = isCo ? (job.homeownerName || "Homeowner") : (otherUser.company || "Contractor");
    const role = isCo ? "homeowner who posted this job" : "contractor hired for this job";
    setTimeout(async () => {
      try {
        const convo = history.slice(-8).map((m) => (m.from === otherUid ? otherName : "Other") + ": " + m.text).join("\n");
        const prompt =
          "You are " + otherName + ", a " + role + " on a home-contracting app, having a short text chat. Reply naturally and briefly (1-2 sentences), like a real person texting about scheduling, access, or the job. Stay practical and friendly.\n" +
          "JOB: " + (job.title || "") + " — " + (job.summary || job.desc || "") + "\n" +
          "CONVERSATION SO FAR:\n" + convo + "\n\n" +
          "Write only " + otherName + "'s next reply, no name prefix, no quotes.";
        const text = await callClaude([{ role: "user", content: prompt }], { background: true });
        const reply = (text || "").trim().replace(/^["']|["']$/g, "").slice(0, 400);
        if (!reply) return;
        const rmsg = { id: rid(), from: otherUid, name: otherName + " (demo)", text: reply, at: new Date().toISOString() };
        const cur = (await sGet(CHAT_KEY(job.id))) || [];
        const merged = [...cur, rmsg].slice(-100);
        await sSet(CHAT_KEY(job.id), merged);
        if (chatJob && chatJob.id === job.id) {
          setChatMsgs(merged);
          setTimeout(() => chatEnd.current && chatEnd.current.scrollIntoView({ block: "end" }), 60);
        }
      } catch (e) { /* demo reply is best-effort */ }
    }, 1800 + Math.random() * 1500);
  };

  /* ----- derived ----- */
  const feedRaw = board.filter((j) => j.status === "open" && !me.passed.includes(j.id));
  const feedJobs = (radiusOn && inRange) ? feedRaw.filter((j) => inRange[j.id] !== false) : feedRaw;
  const archMine = archived.filter((j) => j.homeownerUid === me.uidH || (j.applicants || []).some((a) => a.uid === me.uidC) || j.chosen === me.uidC);
  const mergeArch = (live) => {
    const ids = new Set(live.map((j) => j.id));
    return [...live, ...archMine.filter((a) => !ids.has(a.id))];
  };
  const myJobsHO = mergeArch(board.filter((j) => j.homeownerUid === me.uidH || me.mine.includes(j.id)));
  const myJobsCO = mergeArch(board.filter((j) => (j.applicants || []).some((a) => a.uid === me.uidC) || j.chosen === me.uidC));
  const activeUid = me.role === "contractor" ? me.uidC : me.uidH;
  const wonCount = myJobsCO.filter((j) => j.chosen === me.uidC).length;
  const hoOpen = myJobsHO.filter((j) => j.status === "open").length;
  const hoMatched = myJobsHO.filter((j) => j.status === "matched").length;
  const hoDone = myJobsHO.filter((j) => j.status === "complete").length;

  const tabs = me.role === "contractor"
? [["feed", "Feed", ClipboardList], ["myjobs", "My Jobs", Briefcase], ["estimator", "Estimate", Calculator], ["work", "My Work", Camera], ["settings", "Profile", User]]
    : [["chat", "Get Estimate", MessageCircle], ["myjobs", "My Jobs", Briefcase], ["pros", "Pros", Users], ["profile", "Profile", User]];

  const overlay = viewing || chatJob;
  const hoReady = !!(profH.name && profH.name.trim() && profH.contact && profH.contact.trim() && profH.address && profH.address.trim());
  const coReady = !!(profC.company && profC.company.trim());
  const needsSetup = me.role === "homeowner" ? !hoReady : me.role === "contractor" ? !coReady : false;
  const totalUnread = Object.values(unread).reduce((a, b) => a + b, 0);
  const newNotifCount = notifs.filter((x) => x.at > (me.seenAt || 0)).length;
  const openNotifs = () => {
    setNotifOpen((o) => {
      const next = !o;
      if (next && notifs.length) setMe((m) => ({ ...m, seenAt: Math.max(m.seenAt || 0, notifs[0].at) }));
      return next;
    });
  };
  const tapNotif = (nt) => {
    setNotifOpen(false);
    const job = board.find((j) => j.id === nt.jobId);
    if (!job) return;
    if (nt.icon === "job") { goTab("feed"); return; }
    if (nt.icon === "msg") { openChat(job); return; }
    goTab("myjobs");
  };

  const JobPill = ({ j }) => {
    if (j.status === "open") return <Pill kind="open">Open</Pill>;
    if (j.status === "matched") return <Pill kind="match">Matched</Pill>;
    return <Pill kind="done">Complete</Pill>;
  };

  const estCatObj = estCat ? CATEGORIES.find((c) => c.cat === estCat) : null;
  const estSubs = estCatObj && estCatObj.subs ? estCatObj.subs : [];

  /* ============================ UI ============================ */
  return (
    <div className="app">
      <style>{CSS}</style>

      <header className="bar">
        {overlay ? (
          <button className="backbtn" onClick={() => { setViewing(null); setChatJob(null); }}>
            <ChevronLeft size={24} /> Back
          </button>
        ) : (
          <div className="mark">CAZ<span>BID</span><i className="ver">v4.08</i></div>
        )}
        {me.role && !overlay && (
          <div className="barright">
            <button className="iconbtn bellbtn" onClick={openNotifs} title="Notifications">
              <Bell size={18} />
              {newNotifCount > 0 && <span className="belldot">{newNotifCount}</span>}
            </button>
            <button className="iconbtn" onClick={shareApp} title="Share CazBid">
              <Share size={18} />
            </button>
            <button className="iconbtn" onClick={() => { refreshBoard(); if (tab === "pros") refreshPros(); }}>
              <RefreshCw size={18} className={busy === "board" || busy === "pros" ? "spin" : ""} />
            </button>
            <button className="rolepill" onClick={() => setMe((m) => ({ ...m, role: "" }))}>
              <ArrowLeftRight size={13} /> {me.role === "contractor" ? "Pro" : "Owner"}
            </button>
          </div>
        )}
        {overlay && chatJob && <div className="bartitle">{chatJob.title}</div>}
        {overlay && viewing && <div className="bartitle">Profile</div>}
      </header>

      {toast && <div className="toast">{toast}</div>}
      {notifOpen && (
        <div className="notifback" onClick={() => setNotifOpen(false)}>
          <div className="notifpanel" onClick={(e) => e.stopPropagation()}>
            <div className="notifhead">Notifications <button className="notifx" onClick={() => setNotifOpen(false)}><X size={16} /></button></div>
            {notifs.length === 0 && <p className="hint center" style={{ padding: "16px 0" }}>Nothing yet — new jobs, hires, accepted bids, and messages show up here.</p>}
            {notifs.map((nt) => (
              <button className={"notifrow" + (nt.at > (me.seenAt || 0) ? " unseen" : "")} key={nt.id} onClick={() => tapNotif(nt)}>
                <span className={"notifico " + nt.icon}>{nt.icon === "job" ? "🧰" : nt.icon === "bid" ? "✋" : nt.icon === "hired" ? "🤝" : "💬"}</span>
                <span className="notiftxt">{nt.text}<span className="notifwhen">{fmtDate(nt.at)}</span></span>
              </button>
            ))}
          </div>
        </div>
      )}
      {party && <Party data={party} onClose={() => setParty(null)} />}

      {svcPrompt && (
        <div className="svcwrap" onClick={() => setSvcPrompt(null)}>
          <div className="svccard" onClick={(e) => e.stopPropagation()}>
            <div className="svchead">Before you go to {svcPrompt.name}</div>
            <ol className="howtosteps">
              <li>{svcPrompt.name} opens in a new browser tab — get your measurement report there.</li>
              <li>On the page showing your numbers (total area, pitch, ridges, valleys…), <b>take a screenshot</b>.</li>
              <li><b>Come back to this CazBid tab</b> and tap <b>“📸 Upload screenshot.”</b> No files to download or hunt for.</li>
            </ol>
            <p className="howtoback">↩︎ <b>Getting back is easy:</b> CazBid stays open in this tab. Switch tabs or tap the back arrow to return — your job is saved as a draft, so nothing is lost.</p>
            <button className="btn primary full big" onClick={() => { const u = svcPrompt.url; setSvcPrompt(null); window.open(u, "_blank", "noopener,noreferrer"); }}>
              Continue to {svcPrompt.name} ↗
            </button>
            <button className="btn ghost full" onClick={() => setSvcPrompt(null)}>Cancel</button>
          </div>
        </div>
      )}

      {convConfirmReset && (
        <div className="svcwrap" onClick={() => setConvConfirmReset(false)}>
          <div className="svccard" onClick={(e) => e.stopPropagation()}>
            <div className="svchead">Start over?</div>
            <p className="body" style={{ marginTop: -4 }}>This clears your whole conversation and the running estimate. You can't undo it.</p>
            <button className="btn primary full big" onClick={convReset}>Yes, start over</button>
            <button className="btn ghost full" onClick={() => setConvConfirmReset(false)}>Cancel — keep chatting</button>
          </div>
        </div>
      )}

      {estSvcPrompt && (
        <div className="svcwrap" onClick={() => setEstSvcPrompt(null)}>
          <div className="svccard" onClick={(e) => e.stopPropagation()}>
            <div className="svchead">Before you go to {estSvcPrompt.name}</div>
            <ol className="howtosteps">
              <li>{estSvcPrompt.name} opens in a new tab — pull your measurement report there.</li>
              <li>On the page with your numbers, <b>take a screenshot</b> (or download the PDF).</li>
              <li><b>Come back to this CazBid tab</b> and tap <b>“📸 Upload report or screenshot.”</b></li>
            </ol>
            <p className="howtoback">↩︎ CazBid stays open in this tab — switch back when you're done.</p>
            <button className="btn primary full big" onClick={() => { const u = estSvcPrompt.url; setEstSvcPrompt(null); window.open(u, "_blank", "noopener,noreferrer"); }}>
              Continue to {estSvcPrompt.name} ↗
            </button>
            <button className="btn ghost full" onClick={() => setEstSvcPrompt(null)}>Cancel</button>
          </div>
        </div>
      )}

      {/* ---------- profile viewer ---------- */}
      {viewing && (() => {
        const u = users[viewing];
        if (!u) return <main className="page"><section className="card"><p className="hint">Loading profile…</p></section></main>;
        const isCo = u.role === "contractor";
        return (
          <main className="page">
            <section className="card profhead">
              <Avatar user={u} size="xl" />
              <div className="grow">
                <div className="h1">{isCo ? u.company : u.name}</div>
                <div className="hint">{u.town}{isCo && u.trades ? " · " + u.trades : ""}</div>
                <div className="ratingline">{starsOf(isCo ? coStars : hoStars, u.uid) || "No ratings yet"}</div>
              </div>
            </section>
            {u.bio && <section className="card"><p className="body">{u.bio}</p></section>}
            {isCo && u.posts && u.posts.length > 0 && (
              <section className="card">
                <div className="h2">Recent work</div>
                {viewPosts.length === 0 && <p className="hint">Loading photos…</p>}
                <div className="postcol">
                  {viewPosts.map((p) => (
                    <figure className="postcard" key={p.id}>
                      {p.caption && <figcaption className="postcap">{p.caption}</figcaption>}
                      <div className="postimgwrap"><img src={p.photo} alt="" /></div>
                    </figure>
                  ))}
                </div>
              </section>
            )}
            <section className="card">
              <div className="h2">Reviews</div>
              <ReviewList uid={u.uid} role={u.role} emptyText="No written reviews yet." />
            </section>
          </main>
        );
      })()}

      {/* ---------- chat ---------- */}
      {chatJob && !viewing && (
        <main className="page chatpage">
          <div className="chat">
            {chatMsgs.length === 0 && <p className="hint center" style={{ marginTop: 24 }}>No messages yet — say hi and talk scheduling, access, and the final walkthrough price.</p>}
            {chatMsgs.map((m) => (
              <div key={m.id} className={"bubble" + (m.from === activeUid ? " mine" : "")}>
                <span className="who">{m.name}</span>
                {m.text}
              </div>
            ))}
            <div ref={chatEnd} />
          </div>
          <div className="chatbar">
            <button className="iconbtn" onClick={refreshChat}><RefreshCw size={18} /></button>
            <input className="chatin" placeholder="Message…" value={chatText}
              onChange={(e) => setChatText(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") sendMsg(); }} />
            <button className="sendbtn" disabled={busy === "send" || !chatText.trim()} onClick={sendMsg}>
              <Send size={18} />
            </button>
          </div>
        </main>
      )}

      {/* ---------- role chooser ---------- */}
      {!me.role && !overlay && (
        <main className="page chooser">
          <img className="heroav" src={CAZA_LOGO} alt="CazBid" />
          <h1 className="hero">One photo.<br />One price.<br />You pick the pro.</h1>
          <button className="rolebtn" onClick={() => { setMe((m) => ({ ...m, role: "homeowner" })); setTab("profile"); }}>
            🏠 I need work done
          </button>
          <button className="rolebtn dark" onClick={() => { setMe((m) => ({ ...m, role: "contractor" })); setTab("myjobs"); }}>
            🔧 I'm a contractor
          </button>
          <div className="howrow">
            <div className="howstep"><b>1</b>Snap or describe the job</div>
            <div className="howstep"><b>2</b>Get an instant AI price</div>
            <div className="howstep"><b>3</b>Pick your pro</div>
          </div>
          <div className="chooserbtns">
            <button className="btn ghost" onClick={shareApp}><Share size={15} /> Invite someone</button>
            <button className="btn ghost" onClick={sendFeedback}><MessageSquare size={15} /> Send feedback</button>
          </div>
          <p className="hint center">Prototype. CazBid takes no cut and never touches the money — homeowners pay contractors directly. Anything posted is visible to everyone using this app.</p>
        </main>
      )}

      {/* ---------- HOMEOWNER: new job ---------- */}
      {me.role === "homeowner" && tab === "post" && !overlay && (
        <main className="page">
          <div className="pagetitle">Get an instant price</div>
          <section className="card">
            <textarea className="desc" rows={4} value={desc} onChange={(e) => setDesc(e.target.value)}
              placeholder="What do you need done? e.g. Replace the shingle roof on my 1,800 sqft ranch — some plywood feels soft near the chimney." />
            <label className="dropzone">
              <input type="file" accept="image/*" multiple style={{ display: "none" }}
                onChange={(e) => { addPhotos(e.target.files); e.target.value = ""; }} />
              <Camera size={30} />
              <b>{busy === "photos" ? "Adding photos…" : "Add photos of the job"}</b>
              <span>a few photos = a much better price</span>
            </label>
            <p className="privacywarn"><AlertTriangle size={13} /> Photos you add are visible to every contractor on CazBid. Don't include faces, license plates, documents, or anything private.</p>
            {photos.length > 0 && (
              <>
                <div className="thumbs">
                  {photos.map((p, i) => (
                    <div className="thumb" key={i}>
                      <img src={p} alt={"photo " + (i + 1)} />
                      <button className="thumbrm" onClick={() => setPhotos(photos.filter((_, j) => j !== i))}><X size={12} /> Remove</button>
                    </div>
                  ))}
                </div>
                <p className="hint">Tap Remove on any photo to take it off before posting.</p>
              </>
            )}
          </section>

          <section className="card">
            <div className="card-h2">Where's the job?</div>
            <label className="addrtoggle">
              <button className={"toggleswitch" + (sameAddr ? " on" : "")} onClick={() => setSameAddr(!sameAddr)}><span /></button>
              <span>Job is at my home address{profH.address ? "" : " (add it in Profile)"}</span>
            </label>
            {!sameAddr && (
              <input className="in" style={{ marginTop: 10 }} value={jobAddr} onChange={(e) => setJobAddr(e.target.value)} placeholder="Job address — 123 Main St, Town, NY" />
            )}
            {sameAddr && profH.address && <p className="hint" style={{ marginTop: 8 }}>📍 {profH.address} · only shared with the pro you hire</p>}
          </section>

          <section className={"card measband" + (roofOpen ? " open" : "")}>
            <button className="rowtoggle" onClick={() => setRoofOpen(!roofOpen)}>
              <span className="measleft">
                <span className="measicon">📐</span>
                <span>
                  <span className="meastitle">Add exact measurements <span className="measrec">recommended</span></span>
                  <span className="meassub">Roof report or LiDAR room scan → a much tighter, more accurate price</span>
                </span>
              </span>
              <span className="chev">{roofOpen ? "▴" : "▾"}</span>
            </button>
            {roofOpen && (
              <div className="roofbody">
                <div className="seclabel">Roof — aerial reports</div>
                <div className="reportgrid">
                  <button className="report" onClick={() => setSvcPrompt({ name: "EagleView", url: "https://myev.eagleview.com/place-order" })}><b>EagleView</b><span>Aerial report, the industry standard. eagleview.com</span><span className="reportgo">Tap for steps ↗</span></button>
                  <button className="report" onClick={() => setSvcPrompt({ name: "GAF QuickMeasure", url: "https://quickmeasure.gaf.com" })}><b>GAF QuickMeasure</b><span>~$25-35 aerial report, ~1 hour. gaf.com</span><span className="reportgo">Tap for steps ↗</span></button>
                  <button className="report" onClick={() => setSvcPrompt({ name: "Hover", url: "https://hover.to/onboarding/login" })}><b>Hover</b><span>Free app — photos of your house build the measurements. hover.to</span><span className="reportgo">Tap for steps ↗</span></button>
                </div>
                <div className="seclabel">Indoor — scan the room with your phone</div>
                <div className="reportgrid">
                  <button className="report" onClick={() => setSvcPrompt({ name: "Polycam", url: "https://poly.cam/login" })}><b>Polycam</b><span>LiDAR room scans on Pro iPhones. poly.cam</span><span className="reportgo">Tap for steps ↗</span></button>
                  <button className="report" onClick={() => setSvcPrompt({ name: "magicplan", url: "https://cloud.magicplan.app" })}><b>magicplan</b><span>Floor plans straight from your phone. magicplan.app</span><span className="reportgo">Tap for steps ↗</span></button>
                  <button className="report" onClick={() => setSvcPrompt({ name: "Canvas", url: "https://canvas.io/login" })}><b>Canvas</b><span>Contractor-grade LiDAR home scans. canvas.io</span><span className="reportgo">Tap for steps ↗</span></button>
                </div>
                <p className="hint" style={{ textAlign: "center", margin: "4px 0 2px" }}>Tap a service above for simple phone steps. Already have your report?</p>
                <label className="dropzone shot">
                  <input type="file" accept="image/*" style={{ display: "none" }}
                    onChange={(e) => { handleReport(e.target.files[0]); e.target.value = ""; }} />
                  <b>{busy === "report" ? "Reading screenshot…" : "📸 Upload screenshot of measurements"}</b>
                  <span className="dzsub">Take a screenshot of the report, then tap here</span>
                </label>
                <div className="altrow">
                  <label className="altlink">
                    <input type="file" accept="application/pdf,image/*" style={{ display: "none" }}
                      onChange={(e) => { handleReport(e.target.files[0]); e.target.value = ""; }} />
                    Upload PDF instead
                  </label>
                  <button className="altlink" onClick={() => { setPasteOpen(!pasteOpen); setPasteText(""); }}>
                    {pasteOpen ? "Close paste box" : "Paste numbers instead"}
                  </button>
                </div>
                {pasteOpen && (
                  <div className="pastebox">
                    <textarea className="desc" rows={3} value={pasteText} onChange={(e) => setPasteText(e.target.value)}
                      placeholder="e.g. area 2450 sqft, pitch 8/12, eaves 120, ridges 45 — or: kitchen 14x18, living room 16x22, ceilings 8 ft" />
                    <button className="btn primary full" disabled={busy === "report"} onClick={parsePaste}>
                      {busy === "report" ? "Parsing…" : "Parse"}
                    </button>
                  </div>
                )}
              </div>
            )}
            {roofDims && <p className="ai-note">📐 {roofDims}</p>}
          </section>

          {!questions && (
            <button className="btn primary full big" disabled={busy === "ask" || busy === "bid"} onClick={askQuestions}>
              {busy === "ask" ? "Thinking…" : (busy === "bid" ? "Pricing your job…" : "✦ Get my instant bid")}
            </button>
          )}

          {questions && (
            <section className="card qcard">
              <div className="h2">A couple quick questions <span className="hint">helps nail the price — answer what you can</span></div>
              {questions.map((q, i) => (
                <label className="fld" key={i}><span>{q}</span>
                  <input className="in" value={answers[i] || ""} onChange={(e) => setAnswers({ ...answers, [i]: e.target.value })} placeholder="Your answer (optional)" />
                </label>
              ))}
              <div className="btnrow">
                <button className="btn ghost grow1" disabled={busy === "bid"} onClick={getBid}>Skip</button>
                <button className="btn primary grow1" disabled={busy === "bid"} onClick={getBid}>
                  {busy === "bid" ? "Pricing…" : "Get my price"}
                </button>
              </div>
            </section>
          )}

          {bidPreview && (
            <section className="card bidcard">
              <div className="h1">{bidPreview.title}</div>
              <p className="body">{bidPreview.summary}</p>
              <div className="bid-price">{$0(bidPreview.priceLow)} – {$0(bidPreview.priceHigh)}</div>
              <div className="bid-days">≈ {bidPreview.days} day{bidPreview.days !== 1 ? "s" : ""} on site</div>
              {bidPreview.confidence && bidPreview.confidence !== "high" && (
                <div className="tighten">
                  <p className="tightentext">{bidPreview.confidence === "low"
                    ? "This is a rough range — there wasn't quite enough detail to price it tightly."
                    : "This range is solid, but a few more details would tighten it."}
                    {bidPreview.missing && bidPreview.missing.length > 0 && (
                      <span className="tightenmiss"> Most helpful: {bidPreview.missing.join(", ")}.</span>
                    )}
                  </p>
                  <button className="btn ghost full" disabled={busy === "ask" || busy === "bid"} onClick={tightenPrice}>
                    ✎ Answer a few questions for a tighter price
                  </button>
                </div>
              )}
              {/* homeowner sees only the price range above; cost breakdown is contractor-only on the feed card */}
              {bidPreview.includes.length > 0 && (
                <ul className="bid-inc">{bidPreview.includes.map((x, i) => <li key={i}>{x}</li>)}</ul>
              )}
              {bidPreview.usedEstimate && <p className="estflag">📍 Priced using a rough size estimate from the address — add a measurement report for an exact quote.</p>}
              {bidPreview.note && <p className="hint">⚠ {bidPreview.note}</p>}
              {photos.length > 0 && (
                <button className={"privacyaccept" + (privacyOk ? " on" : "")} onClick={() => setPrivacyOk(!privacyOk)}>
                  <span className="pacheck">{privacyOk ? <Check size={15} /> : null}</span>
                  <span className="patext"><b>I understand my photos will be visible to all contractors on CazBid</b> and don't contain faces, license plates, documents, or anything private.</span>
                </button>
              )}
              <button className="btn primary full" disabled={busy === "post"} onClick={postJob}>
                {busy === "post" ? "Posting…" : "Post to local contractors"}
              </button>
            </section>
          )}
        </main>
      )}

      {/* ---------- HOMEOWNER: conversational estimate ---------- */}
      {me.role === "homeowner" && tab === "chat" && !overlay && (
        <main className="page">
          <>
              {convBid && (
                <section className="card convbidcard">
                  <div className="convbidtop">
                    <span className="convbidlabel">Running estimate</span>
                    <span className={"convconf " + convBid.confidence}>{convBid.confidence === "high" ? "Dialed in" : convBid.confidence === "medium" ? "Getting close" : "Rough so far"}</span>
                  </div>
                  <div className="bid-price">{$0(convBid.priceLow)} – {$0(convBid.priceHigh)}</div>
                  <div className="bid-days">≈ {convBid.days} day{convBid.days !== 1 ? "s" : ""} on site</div>
                  {convBid.chosen ? (
                    <div className="convchosen">
                      <span className="convchosenlbl">✓ Material</span>
                      <span className="convchosenval">{convBid.chosen.tier ? convBid.chosen.tier + " — " : ""}{convBid.chosen.name}</span>
                      <button className="convchosenchg" disabled={convBusy || convDone} onClick={() => setConvBid((b) => b ? { ...b, chosen: null } : b)}>change</button>
                    </div>
                  ) : convBid.primaryOptions && convBid.primaryOptions.length > 0 ? (
                    <div className="convopts">
                      <div className="seclabel">Popular options <span className="hint">tap to choose</span></div>
                      {convBid.primaryOptions.map((o, i) => (
                        <div className="convopt" key={i}>
                          <button className="convoptpick" disabled={convBusy || convDone} onClick={() => convPickTier(o)}>
                            <span className="convopttier">{o.tier}</span>
                            <span className="convoptname">{o.name}{o.why ? " — " + o.why : ""}</span>
                          </button>
                          {o.url && /^https?:\/\//.test(o.url) && <a className="convoptlink" href={o.url} target="_blank" rel="noopener noreferrer">↗</a>}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              )}

              <section className="card convchat">
                <div className="convmsgs">
                  {convMsgs.map((m, i) => (
                    m.role === "ai" ? (
                      <div className="convrow ai" key={i}>
                        <div className="convav"><img className="helperimg sm" src={AL_NOTEPAD} alt="" /></div>
                        <div className="convbubble ai">{m.text}</div>
                      </div>
                    ) : (
                      <div className="convbubble me" key={i}>{m.text}</div>
                    )
                  ))}
                  {convBusy && (
                    <div className="convrow ai">
                      <div className="convav"><img className="helperimg sm" src={AL_NOTEPAD} alt="" /></div>
                      <div className="convbubble ai typing"><span></span><span></span><span></span></div>
                    </div>
                  )}
                  <div ref={convEndRef} />
                </div>

                {!convDone ? (
                  <>
                    {convOptions.length > 0 && !convBusy && (
                      <div className="convchoices">
                        {convOptions.map((opt, i) => (
                          <button className="convchoice" key={i} onClick={() => convPickOption(opt)}>{opt}</button>
                        ))}
                      </div>
                    )}
                    {convPhotos.length > 0 && (
                      <div className="thumbrow">
                        {convPhotos.map((p, i) => (<div className="thumb" key={i}><img src={p} alt="" /><button onClick={() => setConvPhotos((a) => a.filter((_, idx) => idx !== i))}>×</button></div>))}
                      </div>
                    )}
                    <div className="convattach">
                      <label className="attachbtn">
                        <input type="file" accept="image/*" multiple style={{ display: "none" }}
                          onChange={async (e) => { const fs = [...e.target.files]; e.target.value = ""; for (const f of fs.slice(0, 3)) { try { const u = await imageToJpeg(f, 1400); setConvPhotos((p) => [...p, u].slice(0, 3)); } catch (er) { /* skip */ } } }} />
                        <Camera size={15} /> Photo
                      </label>
                      <label className="attachbtn">
                        <input type="file" accept="application/pdf,image/*" style={{ display: "none" }}
                          onChange={(e) => { handleConvReport(e.target.files[0]); e.target.value = ""; }} />
                        <ListChecks size={15} /> Report
                      </label>
                      <button className="attachbtn" onClick={() => setConvReportOpen(!convReportOpen)}><Sparkles size={15} /> Get measured</button>
                    </div>
                    {convReportOpen && (
                      <div className="convreports">
                        <p className="hint">Get an exact measurement report, then upload it with the Report button above:</p>
                        <button className="report" onClick={() => setEstSvcPrompt({ name: "EagleView", url: "https://myev.eagleview.com/place-order" })}><b>EagleView</b><span>Aerial roof report. eagleview.com</span><span className="reportgo">Tap for steps ↗</span></button>
                        <button className="report" onClick={() => setEstSvcPrompt({ name: "GAF QuickMeasure", url: "https://quickmeasure.gaf.com" })}><b>GAF QuickMeasure</b><span>~$25-35 aerial report. gaf.com</span><span className="reportgo">Tap for steps ↗</span></button>
                        <button className="report" onClick={() => setEstSvcPrompt({ name: "Polycam", url: "https://poly.cam/login" })}><b>Polycam</b><span>LiDAR room scans. poly.cam</span><span className="reportgo">Tap for steps ↗</span></button>
                      </div>
                    )}
                    <div className="convinputrow">
                      <input className="in" value={convInput} onChange={(e) => setConvInput(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") convSend(); }}
                        placeholder={convOptions.length ? "…or type a different answer" : "Type your answer…"} disabled={convBusy} />
                      <button className="convsend" disabled={convBusy || (!convInput.trim() && !(convPhotos.length && !convMsgs.some((m) => m.role === "me")))} onClick={convSend}><Send size={18} /></button>
                    </div>
                  </>
                ) : (
                  <div className="convdone">
                    <p className="hint center" style={{ marginBottom: 10 }}>Looks like I've got a solid price for you. Post it and local pros will apply — you pick who gets the job.</p>
                    <div className="addrvis">
                      <div className="addrvistitle">Address visibility</div>
                      <button className={"addropt" + (!addrPublic ? " on" : "")} onClick={() => setAddrPublic(false)}>
                        <b>Area only <span className="addrtag">private</span></b>
                        <span>Contractors see your town &amp; distance. Your exact address unlocks only for the pro you hire.</span>
                      </button>
                      <button className={"addropt" + (addrPublic ? " on" : "")} onClick={() => setAddrPublic(true)}>
                        <b>Show full address <span className="addrtag accuracy">better bids</span></b>
                        <span>All bidding contractors see your address, so they can check the property and bid more accurately. Visible to everyone who sees your job.</span>
                      </button>
                    </div>
                    {convPhotos.length > 0 && (
                      <button className={"privacyaccept" + (privacyOk ? " on" : "")} onClick={() => setPrivacyOk(!privacyOk)}>
                        <span className="pacheck">{privacyOk ? <Check size={15} /> : null}</span>
                        <span className="patext"><b>I understand my photos will be visible to all contractors on CazBid</b> and don't contain faces, license plates, documents, or anything private.</span>
                      </button>
                    )}
                    <button className="btn primary full" disabled={busy === "post"} onClick={postConvJob}>
                      {busy === "post" ? "Posting…" : "Post to local contractors"}
                    </button>
                    <button className="btn ghost full" onClick={() => setConvDone(false)}>Keep chatting / add detail</button>
                  </div>
                )}
              </section>
              <button className="btn ghost full" onClick={() => setConvConfirmReset(true)}>Start over</button>
            </>
        </main>
      )}

      {/* ---------- HOMEOWNER: my jobs ---------- */}
      {me.role === "homeowner" && tab === "myjobs" && !overlay && (
        <main className="page">
          <div className="pagetitle">My Jobs</div>
          <div className="stats">
            <div className="stat"><b>{hoOpen}</b><span>Open</span></div>
            <div className="stat"><b>{hoMatched}</b><span>Matched</span></div>
            <div className="stat"><b>{hoDone}</b><span>Done</span></div>
          </div>
          <div className="segtabs">
            <button className={"seg" + (jobView === "active" ? " on" : "")} onClick={() => setJobView("active")}>Active</button>
            <button className={"seg" + (jobView === "completed" ? " on" : "")} onClick={() => setJobView("completed")}>History</button>
          </div>
          {(() => { const shown = myJobsHO.filter((j) => jobView === "completed" ? j.status === "complete" : j.status !== "complete"); return (<>
          {shown.length === 0 && <section className="card"><p className="hint">{jobView === "completed" ? "No completed jobs yet — finished jobs and their messages are saved here." : "No active jobs — post one from the New Job tab."}</p></section>}
          {shown.map((j) => {
            const apps = j.applicants || [];
            const chosenU = j.chosen ? users[j.chosen] : null;
            return (
              <section className="card" key={j.id}>
                <div className="cardtop">
                  <div className="grow">
                    <div className="h2tight">{j.title}</div>
                    <div className="hint">{fmtDate(j.createdAt)} · {$0(j.priceLow)}–{$0(j.priceHigh)}</div>
                  </div>
                  <JobPill j={j} />
                </div>

                {j.status === "open" && editJob !== j.id && (
                  <div className="editrow">
                    <button className="linkbtn" onClick={() => openEdit(j)}><Pencil size={13} /> Edit</button>
                    <button className={"linkbtn del" + (confirmDel === j.id ? " arm" : "")} disabled={busy === "del-" + j.id} onClick={() => deleteJob(j)}>
                      <Trash2 size={13} /> {confirmDel === j.id ? "Tap again to delete" : "Delete"}
                    </button>
                  </div>
                )}
                {j.status === "open" && editJob === j.id && (
                  <div className="editbox">
                    <textarea className="desc" rows={3} value={editText} onChange={(e) => setEditText(e.target.value)} />
                    <div className="btnrow">
                      <button className="btn ghost grow1" onClick={() => { setEditJob(null); setEditText(""); }}>Cancel</button>
                      <button className="btn primary grow1" disabled={busy === "edit-" + j.id} onClick={() => saveEdit(j)}>{busy === "edit-" + j.id ? "Saving…" : "Save changes"}</button>
                    </div>
                  </div>
                )}

                {j.status === "open" && apps.length === 0 && <p className="hint">Waiting for interested pros…</p>}
                {j.status === "open" && apps.length > 0 && <p className="good">{apps.length} pro{apps.length !== 1 ? "s" : ""} want{apps.length === 1 ? "s" : ""} this job — pick one:</p>}
                {j.status === "open" && apps.map((a) => {
                  const u = users[a.uid];
                  return (
                    <div className="applicant" key={a.uid}>
                      <Avatar user={u} />
                      <div className="grow" onClick={() => setViewing(a.uid)}>
                        <b>{u ? u.company : a.company}</b>
                        <div className="hint">{u && u.trades ? u.trades + " · " : ""}{appDist[j.id + a.uid] != null ? "~" + appDist[j.id + a.uid] + " mi away · " : ""}{starsOf(coStars, a.uid) || "no ratings yet"} · tap for profile</div>
                      </div>
                      <div className="appbid">
                        <span className="appbidnum">{$0(a.bid || j.price)}</span>
                        <button className="btn choose" disabled={busy === "choose-" + j.id + a.uid} onClick={() => chooseContractor(j, a.uid)}>
                          <Check size={15} /> Hire
                        </button>
                      </div>
                    </div>
                  );
                })}

                {(j.status === "matched" || j.status === "complete") && chosenU && (
                  <div className="applicant" onClick={() => setViewing(j.chosen)}>
                    <Avatar user={chosenU} />
                    <div className="grow">
                      <b>{chosenU.company}</b>
                      <div className="hint">{starsOf(coStars, j.chosen) || "no ratings yet"} · tap for profile</div>
                    </div>
                  </div>
                )}
                {(j.status === "matched" || j.status === "complete") && (
                  <div className="btnrow">
                    <button className={"btn ghost grow1" + (unread[j.id] ? " attn" : "")} onClick={() => openChat(j)}><MessageCircle size={16} /> Message{unread[j.id] ? " (" + unread[j.id] + ")" : ""}</button>
                    {j.status === "matched" && <button className="btn ghost grow1" onClick={() => markDone(j)}><Check size={16} /> Complete</button>}
                  </div>
                )}

                {j.status === "complete" && j.chosen && !(j.ratings && j.ratings.ofContractor) && (
                  <RateBox label={"How did " + (chosenU ? chosenU.company : "the contractor") + " do?"} busy={busy} busyKey={"rate-" + j.id + "ofContractor"}
                    onSubmit={(st, cm) => submitRating(j, "ofContractor", st, cm)} />
                )}
                {j.ratings && j.ratings.ofContractor && (
                  <div className="hint">You rated this pro: {"★".repeat(num(j.ratings.ofContractor.stars))}</div>
                )}
              </section>
            );
          })}
          </>); })()}
        </main>
      )}

      {/* ---------- HOMEOWNER: pros ---------- */}
      {me.role === "homeowner" && tab === "pros" && !overlay && (
        <main className="page">
          <div className="pagetitle">Local Pros</div>
          {pros.length === 0 && busy !== "pros" && (
            <section className="card"><p className="hint">No contractor profiles yet — tell a contractor about CazBid.</p></section>
          )}
          {pros.map((u) => (
            <section className="card prosrow" key={u.uid} onClick={() => setViewing(u.uid)}>
              <Avatar user={u} />
              <div className="grow">
                <b>{u.company}</b>
                <div className="hint">{u.trades}{u.town ? " · " + u.town : ""}</div>
                <div className="hint">{starsOf(coStars, u.uid) || "no ratings yet"}</div>
              </div>
              {u.thumb && <img className="prosthumb" src={u.thumb} alt="" />}
            </section>
          ))}
        </main>
      )}

      {/* ---------- HOMEOWNER: profile ---------- */}
      {me.role === "homeowner" && tab === "profile" && !overlay && (
        <main className="page">
          <div className="pagetitle">Your Profile</div>
          {needsSetup && (
            <section className="card setupbanner">
              <b>Welcome! Set up your profile first</b>
              <span>Add your name and contact below and tap Save profile. Then you can post a job — contractors need a way to reach you.</span>
            </section>
          )}
          <section className="card">
            <div className="profedit">
              <Avatar user={profH} size="xl" onTap={() => document.getElementById("avh").click()} />
              <input id="avh" type="file" accept="image/*" style={{ display: "none" }}
                onChange={(e) => { setAvatar("homeowner", e.target.files[0]); e.target.value = ""; }} />
              <div className="grow">
                <div className="ratingline">{starsOf(hoStars, me.uidH) || "No ratings yet"}</div>
                <div className="hint">Pros see this when you post. Tap the photo to change it.</div>
              </div>
            </div>
            <label className="fld"><span>Name</span>
              <input className="in" value={profH.name} onChange={(e) => setProfH({ ...profH, name: e.target.value })} /></label>
            <label className="fld"><span>Phone or email</span>
              <input className="in" value={profH.contact} onChange={(e) => setProfH({ ...profH, contact: e.target.value })} /></label>
            <label className="fld"><span>Town</span>
              <input className="in" value={profH.town} onChange={(e) => setProfH({ ...profH, town: e.target.value })} placeholder="e.g. Lowville, NY" /></label>
            <label className="fld"><span>Home address <span className="hint">only shared with a pro after you hire them</span></span>
              <input className="in" value={profH.address} onChange={(e) => setProfH({ ...profH, address: e.target.value })} placeholder="123 Maple St, Lowville, NY" /></label>
            <label className="fld"><span>About (optional)</span>
              <textarea className="desc" rows={2} value={profH.bio} onChange={(e) => setProfH({ ...profH, bio: e.target.value })} placeholder="e.g. Easy access, dogs are friendly, home most afternoons" /></label>
            <button className="btn primary full" disabled={busy === "prof"} onClick={() => saveProfile("homeowner")}>
              {busy === "prof" ? "Saving…" : "Save profile"}
            </button>
            <p className="hint center" style={{ marginTop: 8 }}>Edits auto-save as drafts on this phone; Save publishes them. Contact info is only shown to the pro you hire.</p>
          </section>
          <section className="card">
            <div className="h2">Reviews about you</div>
            <ReviewList uid={me.uidH} role="homeowner" emptyText="No reviews yet — pros rate you after completed jobs." />
          </section>
          <div className="chooserbtns">
            <button className="btn ghost grow1" onClick={shareApp}><Share size={15} /> Invite someone</button>
            <button className="btn ghost grow1" onClick={sendFeedback}><MessageSquare size={15} /> Send feedback</button>
          </div>
        </main>
      )}

      {/* ---------- CONTRACTOR: feed ---------- */}
      {me.role === "contractor" && tab === "feed" && !overlay && (
        <main className="page">
          <div className="pagetitle">Job Feed</div>
          {profC.base && profC.base.trim() && (
            <button className={"radpill" + (radiusOn ? " on" : "")} onClick={() => setRadiusOn(!radiusOn)}>
              {radiusOn ? "📍 Within " + (profC.radius || 30) + " mi of " + profC.base + " · tap to show all" : "🌐 Showing all jobs · tap to filter by radius"}
            </button>
          )}
          {diag && <p className="diagline">{diag}{feedJobs.length !== board.filter((j) => j.status === "open").length ? " · some filtered (your own / passed)" : ""}</p>}
          {feedJobs.length === 0 && busy !== "board" && (
            <section className="card emptyfeed">
              <ClipboardList size={34} />
              <b>No open jobs yet</b>
              <span className="hint">Homeowners post around the clock — tap ↻ up top to check again. Know a homeowner with a project? Invite them:</span>
              <button className="btn ghost" onClick={shareApp}><Share size={15} /> Invite a homeowner</button>
            </section>
          )}
          {feedJobs.map((j) => {
            const applied = (j.applicants || []).some((a) => a.uid === me.uidC);
            return (
              <section className="card jobcard" key={j.id}>
                {j.photos && j.photos[0] && <img className="jobimg" src={j.photos[0]} alt="job" />}
                <div className="jobbody">
                  <div className="cardtop">
                    <div className="h2tight grow">{j.title}{j.homeownerUid === me.uidH ? <span className="mine-tag">your post</span> : null}{j.demo ? <span className="mine-tag">demo</span> : null}</div>
                    <JobPill j={j} />
                  </div>
                  <div className="hint">📍 {j.addrPublic && j.address ? j.address : (j.town || "Local area")} · {fmtDate(j.createdAt)} · homeowner {starsOf(hoStars, j.homeownerUid) || "is new"} · {(j.applicants || []).length} interested</div>
                  <div className={"addrbadge " + (j.addrPublic ? "open" : "gated")}>{j.addrPublic ? "📍 Address visible — verify before bidding" : "📍 Area only — exact address shared on hire"}</div>
                  <p className="body">{j.summary || j.desc}</p>
                  {j.roofDims && <p className="ai-note">📐 {j.roofDims}</p>}
                  {j.usedEstimate && !j.roofDims && <p className="estflag">📍 Price based on a rough size estimate (no measurements) — confirm on site.</p>}
                  {(() => {
                    const ml = matLists[j.id];
                    return (
                      <div className="matwrap">
                        {!ml ? (
                          <button className="btn ghost full" disabled={matBusy === j.id} onClick={() => genMaterials(j)}>
                            <ListChecks size={16} /> {matBusy === j.id ? "Building list…" : "Build material list"}
                          </button>
                        ) : (
                          <div className="matlist">
                            <div className="matlhead"><ListChecks size={15} /> Materials & quantities <span className="hint">editable — your estimate</span></div>
                            {ml.items.map((it, i) => (
                              <div className="matrow" key={i}>
                                <input className="in matname" value={it.name} placeholder="Material" onChange={(e) => updateMat(j.id, i, "name", e.target.value)} />
                                <input className="in matqty" value={it.qty} placeholder="Qty" onChange={(e) => updateMat(j.id, i, "qty", e.target.value)} />
                                <button className="matx" onClick={() => removeMatRow(j.id, i)}><X size={14} /></button>
                              </div>
                            ))}
                            <button className="linkbtn" onClick={() => addMatRow(j.id)}>+ Add material</button>
                            {ml.note && <p className="hint">📐 {ml.note}</p>}
                          </div>
                        )}
                      </div>
                    );
                  })()}
                  {j.cost && (
                    <div className="costbox">
                      <div className="costhead">AI cost basis <span className="hint">(only contractors see this)</span></div>
                      <div className="costrow"><span>Labor — {j.mh || "?"} hrs @ {$0(j.cost.rate)}/hr</span><b>{$0(j.cost.labor)}</b></div>
                      <div className="costrow"><span>Materials</span><b>{$0(j.cost.mats)}</b></div>
                      <div className="costrow"><span>Material tax ({((j.cost.taxRate || 0) * 100).toFixed(1)}%)</span><b>{$0(j.cost.matTax)}</b></div>
                      <div className="costrow"><span>Equipment / disposal</span><b>{$0(j.cost.equip)}</b></div>
                      <div className="costrow total"><span>Est. total cost</span><b>{$0(j.cost.base)}</b></div>
                      <div className="costrow"><span>Suggested range (28–35% GM)</span><b>{$0(j.priceLow)}–{$0(j.priceHigh)}</b></div>
                      <p className="hint" style={{ marginTop: 6 }}>AI estimate{priceLib.length ? " · learning from " + priceLib.length + " past local job" + (priceLib.length !== 1 ? "s" : "") : ""} — trust your own read. Set any price below.</p>
                    </div>
                  )}
                  {(() => {
                    const lo = num(j.priceLow), hi = num(j.priceHigh) || j.price;
                    const ov = bidOverride[j.id];
                    const myBid = ov != null ? ov : (bidPrices[j.id] != null ? bidPrices[j.id] : j.price);
                    const inRangeBid = bidPrices[j.id] != null ? bidPrices[j.id] : j.price;
                    const pct = hi > lo ? Math.round(((inRangeBid - lo) / (hi - lo)) * 100) : 50;
                    return (
                      <>
                        <div className="bidset">
                          <div className="bidsethead">
                            <span className="hint">Your price for this job</span>
                            <span className="bidbig">{$0(myBid)}</span>
                          </div>
                          {!applied ? (
                            <>
                              {ov == null && (
                                <>
                                  <input className="bidslider" type="range" min={lo} max={hi} step="50" value={inRangeBid}
                                    style={{ ["--pct"]: pct + "%" }}
                                    onChange={(e) => setBidPrices({ ...bidPrices, [j.id]: num(e.target.value) })} />
                                  <div className="bidends"><span>{$0(lo)}</span><span className="hint">AI range · ≈{j.mh || "?"} MH · {j.days}d</span><span>{$0(hi)}</span></div>
                              <p className="hint" style={{ marginTop: 6 }}>{j.addrPublic && j.address ? "📍 " + j.address + " — you can verify this property before bidding." : "📍 " + (j.town || "Local area") + " — exact address shared once hired."}</p>
                                </>
                              )}
                              <div className="overriderow">
                                {ov == null ? (
                                  <button className="linkbtn" onClick={() => setBidOverride({ ...bidOverride, [j.id]: inRangeBid })}><Pencil size={13} /> Enter my own price (ignore range)</button>
                                ) : (
                                  <div className="ovbox">
                                    <span className="hint">Your price</span>
                                    <input className="in ovinput" type="number" inputMode="numeric" value={ov}
                                      onChange={(e) => setBidOverride({ ...bidOverride, [j.id]: num(e.target.value) })} />
                                    <button className="linkbtn" onClick={() => { const c = { ...bidOverride }; delete c[j.id]; setBidOverride(c); }}>Use range instead</button>
                                  </div>
                                )}
                              </div>
                            </>
                          ) : (
                            <div className="hint">You bid {$0((j.applicants || []).find((a) => a.uid === me.uidC) ? (j.applicants.find((a) => a.uid === me.uidC).bid || myBid) : myBid)} — homeowner deciding.</div>
                          )}
                        </div>
                        <div className="btnrow">
                          <button className="btn pass" onClick={() => passJob(j.id)}><X size={16} /> Pass</button>
                          <button className={"btn accept" + (applied ? " did" : "")} disabled={applied || busy === "apply-" + j.id} onClick={() => applyJob(j, myBid)}>
                            {applied ? "✓ Applied" : (busy === "apply-" + j.id ? "Applying…" : "Apply at " + $0(myBid))}
                          </button>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </section>
            );
          })}
        </main>
      )}

      {/* ---------- CONTRACTOR: my jobs ---------- */}
      {me.role === "contractor" && tab === "myjobs" && !overlay && (
        <main className="page">
          <div className="pagetitle">My Jobs</div>
          {needsSetup && (
            <section className="card setupbanner">
              <b>Welcome! Set up your profile first</b>
              <span>Head to the <b>Profile</b> tab, add your company name and trades, and Save — homeowners pick contractors from their profiles. Then browse the <b>Feed</b> to bid on jobs.</span>
            </section>
          )}
          <div className="stats">
            <button className={"stat" + (jobView === "applied" ? " on" : "")} onClick={() => setJobView("applied")}><b>{myJobsCO.length}</b><span>Applied</span></button>
            <button className={"stat" + (jobView === "won" ? " on" : "")} onClick={() => setJobView("won")}><b>{wonCount}</b><span>Won</span></button>
            <button className={"stat" + (jobView === "reviews" ? " on" : "")} onClick={() => setJobView("reviews")}><b>{(coStars[me.uidC] && coStars[me.uidC].n) ? (coStars[me.uidC].s / coStars[me.uidC].n).toFixed(1) : "—"}</b><span>Ratings</span></button>
          </div>
          <div className="segtabs">
            <button className={"seg" + (jobView === "active" ? " on" : "")} onClick={() => setJobView("active")}>Active</button>
            <button className={"seg" + (jobView === "completed" ? " on" : "")} onClick={() => setJobView("completed")}>History</button>
          </div>
          {jobView === "reviews" && (() => {
            const revs = [];
            // seed reviews on my own contractor profile
            const meU = users[me.uidC];
            if (meU && Array.isArray(meU.seedReviews)) for (const r of meU.seedReviews) revs.push({ stars: num(r.stars), comment: r.comment || "", by: "Verified homeowner", at: r.at });
            // reviews homeowners left on my completed jobs
            for (const j of myJobsCO) {
              if (j.chosen === me.uidC && j.ratings && j.ratings.ofContractor) {
                revs.push({ stars: num(j.ratings.ofContractor.stars), comment: j.ratings.ofContractor.comment || "", by: j.homeownerName || "Homeowner", at: j.completedAt || j.matchedAt, job: j.title });
              }
            }
            revs.sort((a, b) => new Date(b.at || 0) - new Date(a.at || 0));
            return (
              <section className="card">
                <div className="h2">Your reviews</div>
                {revs.length === 0 ? <p className="hint">No reviews yet — finish a job and your homeowner can leave one.</p> : revs.map((r, i) => (
                  <div className="revitem" key={i}>
                    <div className="revtop"><span className="revstars">{"★".repeat(Math.max(1, Math.min(5, r.stars)))}<span className="revstarsoff">{"★".repeat(5 - Math.max(1, Math.min(5, r.stars)))}</span></span><span className="revby">{r.by}{r.job ? " · " + r.job : ""}</span></div>
                    {r.comment && <p className="revcomment">{r.comment}</p>}
                  </div>
                ))}
              </section>
            );
          })()}
          {jobView === "completed" && (() => {
            // monthly sales chart from won/completed jobs
            const done = myJobsCO.filter((j) => j.chosen === me.uidC && (j.status === "complete" || j.status === "matched"));
            if (!done.length) return null;
            const byMonth = {};
            for (const j of done) {
              const dt = new Date(j.completedAt || j.matchedAt || j.createdAt);
              const key = dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0");
              const win = (j.applicants || []).find((a) => a.uid === me.uidC);
              byMonth[key] = (byMonth[key] || 0) + (num(win && win.bid) || num(j.price));
            }
            const keys = Object.keys(byMonth).sort();
            const max = Math.max(...keys.map((k) => byMonth[k]), 1);
            const total = keys.reduce((a, k) => a + byMonth[k], 0);
            return (
              <section className="card">
                <div className="h2">Sales by month</div>
                <p className="hint" style={{ marginTop: -4 }}>Total won: {$0(total)} across {done.length} job{done.length !== 1 ? "s" : ""}</p>
                <div className="saleschart">
                  {keys.map((k) => (
                    <div className="salesbar" key={k}>
                      <div className="salesbarfill" style={{ height: Math.round((byMonth[k] / max) * 100) + "%" }} title={$0(byMonth[k])}></div>
                      <span className="salesval">{$0(byMonth[k])}</span>
                      <span className="saleslbl">{k.slice(2).replace("-", "/")}</span>
                    </div>
                  ))}
                </div>
              </section>
            );
          })()}
          {(() => {
            const shown = jobView === "applied" ? myJobsCO.filter((j) => j.status === "open")
              : jobView === "won" ? myJobsCO.filter((j) => j.chosen === me.uidC)
              : jobView === "completed" ? myJobsCO.filter((j) => j.status === "complete")
              : jobView === "reviews" ? []
              : myJobsCO.filter((j) => j.status !== "complete");
            if (jobView === "reviews") return null;
            return (<>
          {shown.length === 0 && <section className="card"><p className="hint">{jobView === "completed" ? "No completed jobs yet — finished jobs and messages are saved here." : jobView === "won" ? "No jobs won yet — keep bidding on the Feed." : jobView === "applied" ? "No open applications right now." : "Nothing active yet."}</p></section>}
          {shown.map((j) => {
            const won = j.chosen === me.uidC;
            return (
              <section className="card" key={j.id}>
                <div className="cardtop">
                  <div className="grow">
                    <div className="h2tight">{j.title}</div>
                    <div className="hint">{$0(j.price)} · {fmtDate(j.createdAt)}</div>
                  </div>
                  <JobPill j={j} />
                </div>
                {j.status === "open" && <p className="hint">Applied · homeowner deciding · {(j.applicants || []).length} pros in</p>}
                {j.status === "matched" && won && <p className="good">✓ You got it! {j.homeownerName} · {j.contact}{j.address ? " · 📍 " + j.address : (j.town ? " · " + j.town : "")}</p>}
                {j.status === "matched" && !won && <p className="hint">Homeowner went with another pro on this one.</p>}
                {j.status === "complete" && won && <p className="good">✓ Complete</p>}
                {(j.status === "matched" || j.status === "complete") && won && (
                  <div className="btnrow">
                    <button className={"btn ghost grow1" + (unread[j.id] ? " attn" : "")} onClick={() => openChat(j)}><MessageCircle size={16} /> Message{unread[j.id] ? " (" + unread[j.id] + ")" : ""}</button>
                    {j.status === "matched" && <button className="btn ghost grow1" onClick={() => markDone(j)}><Check size={16} /> Complete</button>}
                  </div>
                )}
                {j.status === "complete" && won && !(j.ratings && j.ratings.ofHomeowner) && (
                  <RateBox label={"Rate " + j.homeownerName + " (payment, access, communication)"} busy={busy} busyKey={"rate-" + j.id + "ofHomeowner"}
                    onSubmit={(st, cm) => submitRating(j, "ofHomeowner", st, cm)} />
                )}
                {j.ratings && j.ratings.ofHomeowner && won && (
                  <div className="hint">You rated this homeowner: {"★".repeat(num(j.ratings.ofHomeowner.stars))}</div>
                )}
              </section>
            );
          })}
          </>); })()}
        </main>
      )}

      {/* ---------- CONTRACTOR: profile ---------- */}
      {me.role === "contractor" && tab === "settings" && !overlay && (
        <main className="page">
          <div className="pagetitle">Profile &amp; Settings</div>
          {needsSetup && (
            <section className="card setupbanner">
              <b>Welcome! Set up your profile first</b>
              <span>Add your company name and trades below and tap Save profile. Homeowners pick contractors from their profiles, so this is your first impression.</span>
            </section>
          )}
          <section className="card">
            <div className="profedit">
              <Avatar user={profC} size="xl" onTap={() => document.getElementById("avc").click()} />
              <input id="avc" type="file" accept="image/*" style={{ display: "none" }}
                onChange={(e) => { setAvatar("contractor", e.target.files[0]); e.target.value = ""; }} />
              <div className="grow">
                <div className="ratingline">{starsOf(coStars, me.uidC) || "No ratings yet"}</div>
                <div className="hint">Your first impression. Tap the logo to change it.</div>
              </div>
            </div>
            <label className="fld"><span>Your name</span>
              <input className="in" value={profC.name} onChange={(e) => setProfC({ ...profC, name: e.target.value })} placeholder="Dustin" /></label>
            <label className="fld"><span>Company</span>
              <input className="in" value={profC.company} onChange={(e) => setProfC({ ...profC, company: e.target.value })} placeholder="Caza Contractors" /></label>
            <label className="fld"><span>Trades</span>
              <input className="in" value={profC.trades} onChange={(e) => setProfC({ ...profC, trades: e.target.value })} placeholder="Roofing, siding, decks" /></label>
            <label className="fld"><span>Service area <span className="hint">shown on your profile</span></span>
              <input className="in" value={profC.town} onChange={(e) => setProfC({ ...profC, town: e.target.value })} placeholder="Lewis & Oneida County, NY" /></label>
            <label className="fld"><span>Home base <span className="hint">town or address you travel from</span></span>
              <input className="in" value={profC.base} onChange={(e) => setProfC({ ...profC, base: e.target.value })} placeholder="e.g. Lyons Falls, NY" /></label>
            <label className="fld"><span>Travel radius — {profC.radius || 30} miles</span>
              <input className="radslider" type="range" min="5" max="100" step="5" value={profC.radius || 30}
                style={{ ["--pct"]: (((profC.radius || 30) - 5) / 95 * 100) + "%" }}
                onChange={(e) => setProfC({ ...profC, radius: num(e.target.value) })} />
              <div className="bidends"><span>5 mi</span><span className="hint">how far you'll travel for jobs</span><span>100 mi</span></div>
            </label>
            <label className="fld"><span>About your company</span>
              <textarea className="desc" rows={3} value={profC.bio} onChange={(e) => setProfC({ ...profC, bio: e.target.value })}
                placeholder="e.g. 15 years in business, fully insured, W-2 crews not day labor. We show up when we say we will." /></label>
            <button className="btn primary full" disabled={busy === "prof"} onClick={() => saveProfile("contractor")}>
              {busy === "prof" ? "Saving…" : "Save profile"}
            </button>
            <p className="hint center" style={{ marginTop: 8 }}>Edits auto-save as drafts on this phone; Save publishes them to homeowners.</p>
          </section>

          <section className="card">
            <div className="h2">Reviews about you</div>
            <ReviewList uid={me.uidC} role="contractor" emptyText="No written reviews yet — finish jobs and they'll show up here." />
          </section>

          <section className="card">
            <div className="h2">Subscription <span className="hint">demo — no real billing</span></div>
            <div className="plangrid">
              {PLANS.map((pl) => (
                <button key={pl.id} className={"plan" + (me.plan === pl.id ? " on" : "")} onClick={() => setMe({ ...me, plan: pl.id })}>
                  <b>{pl.name}</b>
                  <span className="planprice">${pl.price}<i>/mo</i></span>
                  <span className="hint">{pl.blurb}</span>
                  {me.plan === pl.id && <span className="planon">✓ Active</span>}
                </button>
              ))}
            </div>
            {myPlan && myPlan.limit > 0 && <p className="hint" style={{ marginTop: 8 }}>{monthApps} of {myPlan.limit} applications used this month.</p>}
            <p className="hint" style={{ marginTop: 6 }}>Flat fee, no cut of your jobs — homeowners pay you directly.</p>
          </section>
          <div className="chooserbtns">
            <button className="btn ghost grow1" onClick={shareApp}><Share size={15} /> Invite someone</button>
            <button className="btn ghost grow1" onClick={sendFeedback}><MessageSquare size={15} /> Send feedback</button>
          </div>
          <section className="card">
            <div className="h2">Preferred material brands</div>
            <p className="hint" style={{ marginTop: -2 }}>AL leans on these as defaults in your estimates and good/better/best options.</p>
            <textarea className="desc" rows={3} value={profC.prefMaterials} onChange={(e) => setProfC({ ...profC, prefMaterials: e.target.value })}
              placeholder="e.g. Roofing: GAF Timberline HDZ · Siding: James Hardie · Decking: Trex · Gutters: 6in seamless aluminum" />
            <button className="btn primary full" disabled={busy === "prof"} onClick={() => saveProfile("contractor")}>
              {busy === "prof" ? "Saving…" : "Save preferences"}
            </button>
          </section>

          <section className="card">
            <div className="h2">Your material price list <span className="hint">CSV</span></div>
            <p className="hint" style={{ marginTop: -2 }}>Upload a CSV of your real material costs and your estimates will use YOUR prices instead of estimates. Columns: <b>name, unit, cost</b> (a header row is fine).</p>
            {matCosts.length > 0 ? (
              <div className="matsummary">
                <div className="matcount">✓ {matCosts.length} material price{matCosts.length !== 1 ? "s" : ""} loaded</div>
                <div className="matpreview">
                  {matCosts.slice(0, 5).map((m, i) => (
                    <div className="matrow" key={i}><span>{m.name}{m.unit ? " (" + m.unit + ")" : ""}</span><b>{$0(m.cost)}</b></div>
                  ))}
                  {matCosts.length > 5 && <div className="hint">…and {matCosts.length - 5} more</div>}
                </div>
                <div className="btnrow">
                  <label className="btn ghost grow1">
                    <input type="file" accept=".csv,text/csv" style={{ display: "none" }} onChange={(e) => { handleMatCsv(e.target.files[0]); e.target.value = ""; }} />
                    Replace CSV
                  </label>
                  <button className="btn ghost grow1" onClick={clearMatCosts}>Clear list</button>
                </div>
              </div>
            ) : (
              <label className="dropzone slim">
                <input type="file" accept=".csv,text/csv" style={{ display: "none" }} onChange={(e) => { handleMatCsv(e.target.files[0]); e.target.value = ""; }} />
                <b>{matCostBusy ? "Reading…" : "⬆ Upload material cost CSV"}</b>
              </label>
            )}
            <p className="hint" style={{ marginTop: 8 }}>Example row: <span className="mono">GAF Timberline HDZ, square, 118.50</span></p>
          </section>

          <section className="card">
            <button className="bookhead" onClick={() => setBookOpen(bookOpen === "price" ? "" : "price")}>
              <span className="h2" style={{ margin: 0 }}>Price book <span className="hint">{priceBook.length} items</span></span>
              <span className="bookchev">{bookOpen === "price" ? "▲" : "▼"}</span>
            </button>
            {bookOpen === "price" && (
              <div className="bookbody">
                <p className="hint">Your material unit costs. The estimator uses these when a takeoff line matches. Edit any price to YOUR supplier pricing.</p>
                {[...new Set(priceBook.map((m) => m.cat))].map((cat) => (
                  <div key={cat} className="bookcat">
                    <div className="bookcathd">{cat}</div>
                    {priceBook.filter((m) => m.cat === cat).map((m) => (
                      <div className="bookrow" key={m.id}>
                        <input className="in bkname" value={m.name} onChange={(e) => savePriceBook(priceBook.map((x) => x.id === m.id ? { ...x, name: e.target.value } : x))} />
                        <input className="in bkunit" value={m.unit} onChange={(e) => savePriceBook(priceBook.map((x) => x.id === m.id ? { ...x, unit: e.target.value } : x))} />
                        <input className="in bkval" type="number" inputMode="decimal" value={m.price} onChange={(e) => savePriceBook(priceBook.map((x) => x.id === m.id ? { ...x, price: num(e.target.value) } : x))} />
                        <button className="dimx" onClick={() => savePriceBook(priceBook.filter((x) => x.id !== m.id))}>×</button>
                      </div>
                    ))}
                  </div>
                ))}
                <button className="btn ghost full" onClick={() => savePriceBook([...priceBook, { id: "u-" + rid(), cat: "Custom", name: "New item", unit: "ea", price: 0 }])}>+ Add item</button>
              </div>
            )}
          </section>

          <section className="card">
            <button className="bookhead" onClick={() => setBookOpen(bookOpen === "rate" ? "" : "rate")}>
              <span className="h2" style={{ margin: 0 }}>Production rates <span className="hint">{rateBook.length} tasks</span></span>
              <span className="bookchev">{bookOpen === "rate" ? "▲" : "▼"}</span>
            </button>
            {bookOpen === "rate" && (
              <div className="bookbody">
                <p className="hint">Man-hours per unit of installed work (sq = 100 sqft). These drive the labor hours the estimator builds. Tune to YOUR crews.</p>
                {[...new Set(rateBook.map((r) => r.cat))].map((cat) => (
                  <div key={cat} className="bookcat">
                    <div className="bookcathd">{cat}</div>
                    {rateBook.filter((r) => r.cat === cat).map((r) => (
                      <div className="bookrow" key={r.id}>
                        <input className="in bkname" value={r.task} onChange={(e) => saveRateBook(rateBook.map((x) => x.id === r.id ? { ...x, task: e.target.value } : x))} />
                        <input className="in bkunit" value={r.unit} onChange={(e) => saveRateBook(rateBook.map((x) => x.id === r.id ? { ...x, unit: e.target.value } : x))} />
                        <input className="in bkval" type="number" inputMode="decimal" step="0.01" value={r.rate} onChange={(e) => saveRateBook(rateBook.map((x) => x.id === r.id ? { ...x, rate: num(e.target.value) } : x))} />
                        <button className="dimx" onClick={() => saveRateBook(rateBook.filter((x) => x.id !== r.id))}>×</button>
                      </div>
                    ))}
                  </div>
                ))}
                <button className="btn ghost full" onClick={() => saveRateBook([...rateBook, { id: "u-" + rid(), cat: "Custom", task: "New task", unit: "sq", rate: 1 }])}>+ Add task</button>
              </div>
            )}
          </section>
        </main>
      )}

      {me.role === "contractor" && tab === "estimator" && !overlay && (
        <main className="page">
          {(!myPlan || me.plan !== "pro") ? (
            <section className="card">
              <div className="h1">Pro Estimator <span className="propill">PRO</span></div>
              <p className="body">Build full itemized estimates — material takeoff, labor hours, equipment, and a live margin slider — right from a photo, a description, or an EagleView/LiDAR report.</p>
              <ul className="bid-inc">
                <li>AI material takeoff with editable quantities &amp; costs</li>
                <li>Burdened labor + equipment + tax, priced bottom-up</li>
                <li>Drag-a-margin slider — watch your price move live</li>
                <li>Same aerial &amp; LiDAR report tools as the homeowner side</li>
              </ul>
              <button className="btn primary full" onClick={() => { setMe({ ...me, plan: "pro" }); flash("Pro unlocked — estimator ready."); }}>Upgrade to Pro ($149/mo)</button>
              <button className="btn ghost full" onClick={() => goTab("profile")}>See all plans</button>
            </section>
          ) : (
            <>
              <section className="card">
                <div className="convhead"><img className="helperimg" src={AL_NOTEPAD} alt="AL" /><div className="h1" style={{ margin: 0 }}>Pro Estimator</div></div>
                {estTyping && (
                  <div className="convrow ai" style={{ marginTop: 6 }}>
                    <div className="convav"><img className="helperimg sm" src={AL_NOTEPAD} alt="" /></div>
                    <div className="convbubble ai typing"><span></span><span></span><span></span></div>
                  </div>
                )}
                {!estTyping && (estGreeted || estScope) && (
                  <div className="convrow ai" style={{ marginTop: 6 }}>
                    <div className="convav"><img className="helperimg sm" src={AL_NOTEPAD} alt="" /></div>
                    <div className="convbubble ai">{estScope ? "Nice — here are the key dimensions for a " + estScope.toLowerCase() + " job. Fill in what you've got and I'll build the takeoff." : (estTyped || EST_GREETING)}</div>
                  </div>
                )}

                {!estScope ? (
                  !estTyping && estGreeted && (
                  <div className="popin">
                    {!estCat ? (
                      <div className="scopegrid">
                        {CATEGORIES.map((c, i) => (
                          <button className="scopebtn" key={c.cat} style={{ animationDelay: (i * 40) + "ms" }} onClick={() => setEstCat(c.cat)}>
                            {c.cat}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="popin">
                        <button className="scopepick" onClick={() => setEstCat(null)}><span>← {estCat}</span><span className="scopechg">back</span></button>
                        <div className="scopelist">
                          {estSubs.map((sub, i) => (
                            <button className="scopebtn wide" key={sub.label} style={{ animationDelay: (i * 40) + "ms" }}
                              onClick={() => { setEstScope(sub.label); setEstDimRows([]); fetchCustomDims(sub.label); }}>
                              <span className="scopemain">{sub.label}</span>
                              {sub.hint && <span className="scopehint">{sub.hint}</span>}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="oratext">or tell me about the job</div>
                    <textarea className="desc" rows={2} value={estOpenDesc} onChange={(e) => setEstOpenDesc(e.target.value)}
                      placeholder="e.g. 22sq architectural reroof, one layer tear-off, 6/12 ranch, replace 3 sheets decking" />
                    <button className="btn primary full" disabled={estBusy === "run" || !estOpenDesc.trim()} onClick={() => { setEstDesc(estOpenDesc); runEstimate(); }}>
                      {estBusy === "run" ? "Building takeoff…" : "✦ Build from description"}
                    </button>
                  </div>
                  )
                ) : (
                  <div className="popin">
                    <button className="scopepick" onClick={() => { setEstScope(null); setEstDimRows([]); }}>
                      <span>{estScope}</span><span className="scopechg">change</span>
                    </button>
                    {estBusy === "dims" && (
                      <div className="convrow ai" style={{ marginTop: 4 }}>
                        <div className="convav"><img className="helperimg sm" src={AL_NOTEPAD} alt="" /></div>
                        <div className="convbubble ai typing"><span></span><span></span><span></span></div>
                      </div>
                    )}
                    {estDimRows.length > 0 && (
                      <div className="seclabel" style={{ marginTop: 10 }}>Dimensions <span className="hint">fill in the numbers</span></div>
                    )}
                    {estDimRows.length > 0 && (
                      <div className="dimrows">
                        {estDimRows.map((d) => (
                          <div className="dimrow" key={d.id}>
                            <input className="in dimlabel" placeholder="Label" value={d.label} onChange={(e) => upDimRow(d.id, { label: e.target.value })} />
                            <input className="in dimval" type="number" inputMode="decimal" placeholder="0" value={d.value} onChange={(e) => upDimRow(d.id, { value: e.target.value })} />
                            <input className="in dimunit" placeholder="unit" value={d.unit} onChange={(e) => upDimRow(d.id, { unit: e.target.value })} />
                            <button className="dimx" onClick={() => rmDimRow(d.id)}>×</button>
                          </div>
                        ))}
                      </div>
                    )}
                    <button className="dimchip custom" onClick={() => addDimRow("", "")}>+ add custom dimension</button>
                    {/(standing seam|lok|snap.?lock|metal panel)/i.test((estScope || "") + " " + estDesc) && (
                      <div className="panelw">
                        <span className="panelwlbl">Panel width (drives panel LF)</span>
                        <div className="panelwrow">
                          {[12, 16, 18].map((w) => (
                            <button key={w} className={"panelwbtn" + (num(estPanelW) === w ? " on" : "")} onClick={() => setEstPanelW(w)}>{w}"</button>
                          ))}
                        </div>
                      </div>
                    )}

                    <textarea className="desc" rows={2} style={{ marginTop: 10 }} value={estDesc} onChange={(e) => setEstDesc(e.target.value)}
                      placeholder="Anything to note? (materials, access, tear-off, special conditions)" />

                    <div className="uploadrow">
                      <label className="camerabtn" title="Add job photos">
                        <input type="file" accept="image/*" multiple style={{ display: "none" }}
                          onChange={async (e) => { const fs = [...e.target.files]; e.target.value = ""; for (const f of fs.slice(0, 3)) { try { const u = await imageToJpeg(f, 1600); setEstPhotos((p) => [...p, u].slice(0, 3)); } catch (er) { /* skip */ } } }} />
                        <Camera size={20} /><span className="upbtnlbl">Photos</span>{estPhotos.length > 0 && <span className="camcount">{estPhotos.length}</span>}
                      </label>
                      <label className="camerabtn" title="Upload a measurement report or screenshot">
                        <input type="file" accept="application/pdf,image/*" style={{ display: "none" }}
                          onChange={(e) => { handleEstReport(e.target.files[0]); e.target.value = ""; }} />
                        <ListChecks size={20} /><span className="upbtnlbl">{estBusy === "report" ? "Reading…" : "Report"}</span>
                      </label>
                      <button className="camerabtn" title="Order an aerial or LiDAR measurement" onClick={() => setMeasOpen(measOpen ? "" : "menu")}>
                        <Sparkles size={20} /><span className="upbtnlbl">Measure</span>
                      </button>
                    </div>
                    {measOpen === "menu" && (
                      <div className="measmenu">
                        <div className="measlbl">📡 Aerial roof reports</div>
                        <button className="report" onClick={() => setEstSvcPrompt({ name: "EagleView", url: "https://myev.eagleview.com/place-order" })}><b>EagleView</b><span>Industry-standard aerial roof report</span><span className="reportgo">Tap for steps ↗</span></button>
                        <button className="report" onClick={() => setEstSvcPrompt({ name: "GAF QuickMeasure", url: "https://quickmeasure.gaf.com" })}><b>GAF QuickMeasure</b><span>~$25-35 aerial report, ~1 hour</span><span className="reportgo">Tap for steps ↗</span></button>
                        <div className="measlbl" style={{ marginTop: 8 }}>📱 LiDAR scans (on-site)</div>
                        <button className="report" onClick={() => setEstSvcPrompt({ name: "Polycam", url: "https://poly.cam/login" })}><b>Polycam</b><span>LiDAR room & roof scans on Pro iPhones</span><span className="reportgo">Tap for steps ↗</span></button>
                        <button className="report" onClick={() => setEstSvcPrompt({ name: "Canvas", url: "https://canvas.io/login" })}><b>Canvas</b><span>Contractor-grade LiDAR home scans</span><span className="reportgo">Tap for steps ↗</span></button>
                        <p className="hint" style={{ marginTop: 6 }}>Got a report already? Tap <b>Report</b> to upload it — it auto-fills these dimensions.</p>
                      </div>
                    )}
                    {estPhotos.length > 0 && (
                      <div className="thumbrow">
                        {estPhotos.map((p, i) => (<div className="thumb" key={i}><img src={p} alt="" /><button onClick={() => setEstPhotos((a) => a.filter((_, idx) => idx !== i))}>×</button></div>))}
                      </div>
                    )}
                    {estDims && <p className="ai-note">📐 {estDims}</p>}
                    <button className="btn primary full big" disabled={estBusy === "run" || estBusy === "dims"} onClick={runEstimate}>
                      {estBusy === "run" ? "Building takeoff…" : "✦ Build estimate"}
                    </button>
                  </div>
                )}
              </section>

              {estResult && (() => {
                const matTotal = estResult.items.reduce((a, b) => a + (num(b.cost) || 0), 0);
                const matTax = Math.round(matTotal * estResult.taxRate);
                const labor = Math.round(estResult.laborHours * estResult.laborRate);
                const cost = labor + matTotal + matTax + estResult.equipment;
                const price = estResult.margin != null ? cost : Math.round(cost / (1 - estMargin / 100) / 25) * 25;
                const sell = Math.round(cost / (1 - estMargin / 100) / 25) * 25;
                const profit = sell - cost;
                return (
                  <section className="card">
                    <div className="h1">{estResult.title}</div>
                    {estResult.manualLoaded
                      ? <div className="manualbadge on">📘 Caza {estResult.manualKey} manual loaded</div>
                      : (estResult.manualKey
                          ? <div className="manualbadge off">⚪ No manual loaded ({estResult.manualKey}) — using built-in trade logic</div>
                          : null)}
                    {estResult.notes && <p className="hint">{estResult.notes}</p>}
                    {estResult.checks && estResult.checks.length > 0 && (
                      <div style={{ margin: "9px 0 5px", padding: "9px 11px", background: "#F0FAF3", border: "1px solid #BFE6CC", borderRadius: 10 }}>
                        <div style={{ fontSize: 11.5, fontWeight: 700, color: "#1B7A3D", textTransform: "uppercase", letterSpacing: ".4px", marginBottom: 4 }}>✓ Opus pre-flight check</div>
                        {estResult.checks.map((c, i) => (
                          <div key={i} style={{ fontSize: 12.5, color: "#2F4A39", lineHeight: 1.45 }}>• {c}</div>
                        ))}
                      </div>
                    )}

                    {estResult.primaryOptions && estResult.primaryOptions.length > 0 && (
                      <>
                        <div className="seclabel">Popular local options <span className="hint">good · better · best — tap to use</span></div>
                        <div className="tiergrid">
                          {estResult.primaryOptions.map((o, i) => (
                            <div className={"tiercard" + (estResult.chosenTier === o.tier ? " on" : "")} key={i}>
                              <div className="tiertop"><span className="tierbadge">{o.tier}</span><span className="tiercost">{$0(o.cost)}</span></div>
                              <div className="tiername">{o.name}</div>
                              {o.why && <div className="tierwhy">{o.why}</div>}
                              <div className="tieract">
                                <button className={"btn " + (estResult.chosenTier === o.tier ? "primary" : "ghost") + " grow1"} onClick={() => estPickTier(o)}>
                                  {estResult.chosenTier === o.tier ? "✓ Using" : "Use this"}
                                </button>
                                {o.url && /^https?:\/\//.test(o.url) && (
                                  <a className="btn ghost grow1" href={o.url} target="_blank" rel="noopener noreferrer">View ↗</a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="hint" style={{ margin: "2px 0 4px" }}>Popular, commonly-stocked options near {(profC.base || profC.town || "you")} — not a sales ranking. Picking one updates your primary material line below.</p>
                      </>
                    )}

                    <div className="seclabel">Material takeoff <span className="hint">tap any field to edit</span></div>
                    <div className="takeoff">
                      {estResult.items.map((it, i) => (
                        <div className="toitem" key={i}>
                          <input className="toname" value={it.name} onChange={(e) => estItemSet(i, "name", e.target.value)} />
                          <input className="toqty" type="number" value={it.qty} onChange={(e) => estItemSet(i, "qty", e.target.value)} />
                          <input className="tounit" value={it.unit} onChange={(e) => estItemSet(i, "unit", e.target.value)} placeholder="unit" />
                          <span className="todollar" title="unit price">$<input className="tocost" type="number" value={it.unitPrice != null ? Math.round(num(it.unitPrice) * 100) / 100 : 0} onChange={(e) => estItemSet(i, "unitPrice", e.target.value)} /></span>
                          <b className="tolinecost">{$0(it.cost)}</b>
                          <button className="todel" onClick={() => estItemDel(i)}><X size={14} /></button>
                        </div>
                      ))}
                      <button className="btn ghost full" onClick={estItemAdd}><Plus size={14} /> Add material line</button>
                    </div>

                    <div className="seclabel" style={{ marginTop: 12 }}>Labor &amp; site</div>
                    <div className="estfields">
                      <label className="estf"><span>Man-hours</span><input type="number" value={estResult.laborHours} onChange={(e) => setEstResult((r) => ({ ...r, laborHours: num(e.target.value) }))} /></label>
                      <label className="estf"><span>Burdened $/hr</span><input type="number" value={estResult.laborRate} onChange={(e) => setEstResult((r) => ({ ...r, laborRate: num(e.target.value) }))} /></label>
                      <label className="estf"><span>Crew</span><input type="number" value={estResult.crew} onChange={(e) => setEstResult((r) => ({ ...r, crew: num(e.target.value) }))} /></label>
                      <label className="estf"><span>Days on site</span><input type="number" value={estResult.days} onChange={(e) => setEstResult((r) => ({ ...r, days: num(e.target.value) }))} /></label>
                      <label className="estf"><span>Equipment $</span><input type="number" value={estResult.equipment} onChange={(e) => setEstResult((r) => ({ ...r, equipment: num(e.target.value) }))} /></label>
                      <label className="estf"><span>Tax rate</span><input type="number" step="0.001" value={estResult.taxRate} onChange={(e) => setEstResult((r) => ({ ...r, taxRate: num(e.target.value) }))} /></label>
                    </div>

                    <div className="costbox" style={{ marginTop: 12 }}>
                      <div className="costrow"><span>Materials ({estResult.items.length} lines)</span><b>{$0(matTotal)}</b></div>
                      <div className="costrow"><span>Material tax ({(estResult.taxRate * 100).toFixed(1)}%)</span><b>{$0(matTax)}</b></div>
                      <div className="costrow"><span>Labor — {estResult.laborHours} hrs @ {$0(estResult.laborRate)}{estResult.laborSource === "ratebook" ? <span className="labtag book">rate book</span> : <span className="labtag est">AI est. · verify</span>}</span><b>{$0(labor)}</b></div>
                      <div className="costrow"><span>Equipment / disposal</span><b>{$0(estResult.equipment)}</b></div>
                      <div className="costrow total"><span>Total cost</span><b>{$0(cost)}</b></div>
                    </div>

                    <div className="marginbox">
                      <div className="marginhead"><span>Gross margin</span><span className="marginpct">{estMargin}%</span></div>
                      <input className="bidslider" type="range" min="15" max="50" step="1" value={estMargin}
                        style={{ ["--pct"]: ((estMargin - 15) / 35 * 100) + "%" }}
                        onChange={(e) => setEstMargin(num(e.target.value))} />
                      <div className="bidends"><span>15%</span><span className="hint">profit {$0(profit)}</span><span>50%</span></div>
                      <div className="sellprice"><span>Your price</span><b>{$0(sell)}</b></div>
                    </div>

                    <button className="btn ghost full" onClick={() => { setEstResult(null); setEstDesc(""); setEstPhotos([]); setEstDims(""); }}>Start a new estimate</button>
                  </section>
                );
              })()}
            </>
          )}
        </main>
      )}

      {me.role === "contractor" && tab === "work" && !overlay && (
        <main className="page">
          <div className="pagetitle">My Work</div>
          <section className="card">
            <div className="h2">Your portfolio <span className="hint">homeowners browse these when picking a pro</span></div>
            <AddPost onAdd={addPost} busy={busy} />
            {profC.posts.length > 0 && (
              <div className="postcol">
                {profC.posts.map((p) => (
                  <figure className="postcard" key={p.id}>
                    {p.caption && <figcaption className="postcap">{p.caption}</figcaption>}
                    <div className="postimgwrap">
                      <img src={p.photo} alt="" />
                      <button className="tx" onClick={() => setProfC({ ...profC, posts: profC.posts.filter((x) => x.id !== p.id) })}><X size={13} /></button>
                    </div>
                  </figure>
                ))}
              </div>
            )}
            <p className="hint">Up to 6 posts, newest on top. Each photo keeps its own caption.</p>
            <button className="btn primary full" disabled={busy === "prof"} onClick={() => saveProfile("contractor")}>
              {busy === "prof" ? "Saving…" : "Save & publish portfolio"}
            </button>
          </section>
        </main>
      )}

      {/* ---------- bottom nav ---------- */}
      {me.role && (
        <nav className="bnav">
          {tabs.map(([k, lbl, Icon]) => (
            <button key={k} className={"bitem" + (tab === k && !overlay ? " on" : "")} onClick={() => goTab(k)}>
              <Icon size={22} />
              <span>{lbl}</span>
              {k === "myjobs" && totalUnread > 0 && <span className="navdot">{totalUnread}</span>}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

/* ---------- add-post widget ---------- */
function AddPost({ onAdd, busy }) {
  const [caption, setCaption] = useState("");
  const [staged, setStaged] = useState(null);
  const stage = async (file) => {
    if (!file) return;
    try {
      const url = await new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(r.result);
        r.onerror = () => rej(new Error("read failed"));
        r.readAsDataURL(file);
      });
      setStaged({ file, url });
    } catch (e) { /* ignore */ }
  };
  const post = () => {
    if (!staged) return;
    onAdd(staged.file, caption);
    setStaged(null);
    setCaption("");
  };
  return (
    <div className="addpost">
      {!staged ? (
        <label className="dropzone">
          <input type="file" accept="image/*" style={{ display: "none" }}
            onChange={(e) => { stage(e.target.files[0]); e.target.value = ""; }} />
          <Camera size={28} />
          <b>Choose a work photo</b>
          <span>then add a caption and post it</span>
        </label>
      ) : (
        <div className="stagecard">
          <div className="postimgwrap"><img src={staged.url} alt="" /></div>
          <label className="caplabel">Caption for this photo
            <input className="in" placeholder="e.g. Standing seam in Boonville, 10/12 pitch" value={caption}
              onChange={(e) => setCaption(e.target.value)} autoFocus />
          </label>
          <div className="btnrow">
            <button className="btn ghost grow1" onClick={() => { setStaged(null); setCaption(""); }}>Cancel</button>
            <button className="btn primary grow1" disabled={busy === "prof"} onClick={post}>Post photo</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================ CSS ============================ */
const CSS = `
*{box-sizing:border-box;margin:0;-webkit-tap-highlight-color:transparent}
html,body{background:#F2F3F5}
.app{min-height:100vh;background:#F2F3F5;font-family:Inter,system-ui,sans-serif;color:#15181C;font-size:15px;-webkit-font-smoothing:antialiased}

/* header */
.bar{position:sticky;top:0;z-index:30;display:flex;align-items:center;gap:10px;background:#15181C;padding:10px 16px;padding-top:calc(10px + env(safe-area-inset-top));border-bottom:3px solid #FF6A13;min-height:52px}
.mark{font-family:'Barlow Condensed';font-weight:700;font-size:25px;letter-spacing:1px;color:#fff}
.mark span{color:#FF6A13}
.ver{font-style:normal;font-family:Inter;font-size:10px;font-weight:700;color:#9AA1AB;margin-left:7px;letter-spacing:.5px;vertical-align:super}
.bartitle{color:#fff;font-weight:600;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}
.barright{margin-left:auto;display:flex;align-items:center;gap:8px}
.iconbtn{background:rgba(255,255,255,.1);border:none;color:#fff;width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;cursor:pointer}
.bar .iconbtn{background:rgba(255,255,255,.12)}
.rolepill{display:flex;align-items:center;gap:5px;background:#FF6A13;color:#fff;border:none;border-radius:999px;padding:7px 13px;font-weight:700;font-size:13px;cursor:pointer}
.backbtn{display:flex;align-items:center;gap:2px;background:none;border:none;color:#FF8A47;font-weight:600;font-size:16px;cursor:pointer;padding:4px 4px 4px 0}
.spin{animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}

/* layout */
.page{padding:16px;padding-bottom:calc(96px + env(safe-area-inset-bottom));max-width:640px;margin:0 auto;display:flex;flex-direction:column;gap:14px}
.pagetitle{font-family:'Barlow Condensed';font-weight:700;font-size:30px;text-transform:uppercase;letter-spacing:.5px;margin:2px 0 -2px}
.card{background:#fff;border:1px solid #E7E9ED;border-radius:16px;padding:16px;box-shadow:0 1px 2px rgba(16,24,40,.05)}
.cardtop{display:flex;align-items:flex-start;gap:10px;margin-bottom:6px}
.h1{font-family:'Barlow Condensed';font-weight:700;font-size:25px;line-height:1.08}
.h2{font-family:'Barlow Condensed';font-weight:700;font-size:19px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px;display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
.h2tight{font-family:'Barlow Condensed';font-weight:700;font-size:20px;line-height:1.1}
.body{color:#3A414B;margin:6px 0;line-height:1.45}
.hint{font-size:12.5px;color:#737B86;font-weight:400;text-transform:none;letter-spacing:0;line-height:1.4}
.center{text-align:center}
.good{color:#157F3D;font-weight:600;font-size:14px;margin:6px 0}
.grow{flex:1;min-width:0}
.grow1{flex:1}
button{cursor:pointer;font:inherit}

/* pills & stats */
.pill{border-radius:999px;padding:4px 11px;font-size:12px;font-weight:700;white-space:nowrap}
.pill.open{background:#FFF1E7;color:#C2410C}
.pill.match{background:#EAFAF0;color:#157F3D}
.pill.done{background:#EFF1F4;color:#4B5563}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.stat{background:#fff;border:1px solid #E7E9ED;border-radius:16px;padding:12px 8px;text-align:center;box-shadow:0 1px 2px rgba(16,24,40,.05)}
.stat b{display:block;font-family:'JetBrains Mono',monospace;font-size:22px;color:#FF6A13}
.stat span{font-size:11.5px;color:#737B86;font-weight:600;text-transform:uppercase;letter-spacing:.5px}

/* buttons */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;border-radius:13px;border:none;padding:13px 18px;font-weight:700;font-size:15px}
.btn.primary{background:#FF6A13;color:#fff;font-family:'Barlow Condensed';font-size:19px;letter-spacing:.6px;text-transform:uppercase}
.btn.primary:disabled{opacity:.55}
.btn.primary.big{padding:16px;font-size:21px;box-shadow:0 4px 14px rgba(255,106,19,.3)}
.btn.ghost{background:#fff;border:1.5px solid #D7DBE0;color:#15181C;font-weight:600}
.btn.full{width:100%}
.btn.pass{flex:1;background:#fff;border:1.5px solid #D7DBE0;color:#737B86}
.btn.accept{flex:2;background:#157F3D;color:#fff;font-family:'Barlow Condensed';font-size:18px;letter-spacing:.5px;text-transform:uppercase}
.btn.accept:disabled{opacity:.75}
.btn.accept.did{background:#15181C}
.btn.choose{background:#157F3D;color:#fff;padding:10px 15px;border-radius:11px;font-size:14px}
.btnrow{display:flex;gap:10px;margin-top:10px}

/* inputs */
.in{width:100%;padding:13px 14px;border:1.5px solid #D7DBE0;border-radius:12px;font-size:16px;font-family:Inter;background:#fff}
.in:focus,.desc:focus,.chatin:focus{outline:none;border-color:#FF6A13}
.desc{width:100%;border:1.5px solid #D7DBE0;border-radius:12px;padding:12px 14px;font:inherit;font-size:16px;resize:vertical;background:#fff;line-height:1.45}
.fld{display:block;margin-top:12px}
.fld span{display:block;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#737B86;margin-bottom:5px}

/* dropzones */
.dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;border:2px dashed #C9CED6;border-radius:16px;background:#FAFBFC;padding:26px 14px;margin-top:12px;cursor:pointer;color:#FF6A13;text-align:center}
.dropzone b{color:#15181C;font-size:15.5px}
.dropzone span{font-size:12.5px;color:#737B86}
.dropzone.slim{padding:15px 14px;flex-direction:row;gap:9px}
.dropzone:active{border-color:#FF6A13;background:#FFF6F0}

/* photos */
.thumbs{display:flex;gap:9px;flex-wrap:wrap;margin-top:12px}
.thumb{position:relative;width:78px;height:78px;border-radius:12px;overflow:hidden;border:1px solid #E7E9ED}
.thumb img{width:100%;height:100%;object-fit:cover;display:block}
.tx{position:absolute;top:4px;right:4px;background:rgba(21,24,28,.85);color:#fff;border:none;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;padding:0}
.post .tx{top:6px;right:6px}

/* roof section */
.measband{border:2px solid #FF6A13;background:#FFF6F0}.measband.open{background:#fff}.rowtoggle{display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;background:none;border:none;text-align:left;font:inherit;padding:2px 0}.measleft{display:flex;align-items:center;gap:12px}.measicon{font-size:26px;line-height:1;flex-shrink:0}.meastitle{display:block;font-family:'Barlow Condensed';font-weight:700;font-size:19px;text-transform:uppercase;letter-spacing:.4px;color:#15181C}.measrec{display:inline-block;background:#FF6A13;color:#fff;font-family:Inter;font-size:10px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;padding:2px 7px;border-radius:999px;vertical-align:middle;margin-left:4px}.meassub{display:block;font-size:12.5px;color:#6B7280;margin-top:2px;line-height:1.35}.chev{color:#FF6A13;font-size:20px;flex-shrink:0}
.roofbody{margin-top:12px;display:flex;flex-direction:column;gap:10px}
.reportgrid{display:grid;grid-template-columns:1fr;gap:8px}
.svcwrap{position:fixed;inset:0;background:rgba(21,24,28,.55);display:flex;align-items:center;justify-content:center;padding:22px;z-index:90}
.svccard{background:#fff;border-radius:18px;padding:20px 20px 16px;max-width:420px;width:100%;box-shadow:0 18px 50px rgba(0,0,0,.3)}
.svchead{font-family:'Barlow Condensed';font-weight:700;font-size:23px;text-transform:uppercase;letter-spacing:.5px;color:#15181C;margin-bottom:12px}
.svccard .howtosteps{margin:0 0 10px;padding-left:20px;font-size:14px;color:#2A3038;line-height:1.55}
.svccard .howtosteps li{margin-bottom:6px}
.svccard .howtoback{font-size:12.5px;color:#3A414B;background:#F0F7F2;border:1px solid #CDE6D6;border-radius:9px;padding:9px 11px;margin:0 0 14px;line-height:1.45}
.svccard .btn.big{margin-bottom:8px}
.propill{display:inline-block;background:#FF6A13;color:#fff;font-family:'Barlow Condensed';font-size:13px;font-weight:700;letter-spacing:1px;padding:2px 9px;border-radius:20px;vertical-align:middle;margin-left:8px}
.takeoff{display:flex;flex-direction:column;gap:6px}
.toitem{display:flex;align-items:center;gap:6px}
.toname{flex:1 1 auto;min-width:0;border:1px solid #D7DBE0;border-radius:8px;padding:8px;font-size:13px;font-family:inherit}
.toqty{width:52px;border:1px solid #D7DBE0;border-radius:8px;padding:8px 6px;font-size:13px;font-family:'JetBrains Mono',monospace;text-align:center}
.tounit{width:64px;border:1px solid #D7DBE0;border-radius:8px;padding:8px 6px;font-size:12px;font-family:inherit}
.todollar{display:flex;align-items:center;font-size:13px;color:#6B7280}
.tocost{width:58px;border:1px solid #D7DBE0;border-radius:8px;padding:8px 5px;font-size:13px;font-family:'JetBrains Mono',monospace;text-align:right;margin-left:2px}
.tolinecost{width:66px;flex:0 0 auto;text-align:right;font-size:13px;font-weight:700;font-family:'JetBrains Mono',monospace;color:#15181C}
.todel{background:none;border:none;color:#C2410C;cursor:pointer;padding:4px;display:flex}
.estfields{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.estf{display:flex;flex-direction:column;gap:3px;font-size:12px;color:#6B7280}
.estf input{border:1px solid #D7DBE0;border-radius:8px;padding:8px;font-size:14px;font-family:'JetBrains Mono',monospace}
.marginbox{background:#15181C;color:#fff;border-radius:14px;padding:14px 16px;margin-top:14px}
.marginhead{display:flex;justify-content:space-between;align-items:center;font-family:'Barlow Condensed';text-transform:uppercase;letter-spacing:.5px;font-size:16px}
.marginpct{font-family:'JetBrains Mono',monospace;font-size:20px;font-weight:700;color:#FF8A43}
.marginbox .bidslider{margin:12px 0 4px}
.marginbox .bidends{color:#9AA1AB}
.sellprice{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #2A2F36;margin-top:10px;padding-top:10px}
.sellprice span{font-family:'Barlow Condensed';text-transform:uppercase;letter-spacing:.5px;font-size:16px}
.sellprice b{font-family:'JetBrains Mono',monospace;font-size:26px;color:#fff}
.convbidcard{position:sticky;top:64px;z-index:20}
.convbidtop{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}
.convbidlabel{font-family:'Barlow Condensed';text-transform:uppercase;letter-spacing:.6px;font-size:14px;color:#6B7280}
.convconf{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;padding:3px 9px;border-radius:20px}
.convconf.low{background:#FEF0E6;color:#C2410C}
.convconf.medium{background:#FEF7E0;color:#9A6700}
.convconf.high{background:#EAFAF0;color:#157F3D}
.convopts{margin-top:10px;border-top:1px solid #EEF0F3;padding-top:8px}
.convopt{display:flex;align-items:center;gap:8px;font-size:12.5px;padding:3px 0}
.convoptpick{flex:1;display:flex;align-items:center;gap:8px;background:#F7F8FA;border:1px solid #E2E5EA;border-radius:10px;padding:8px 10px;cursor:pointer;text-align:left;font-family:inherit}
.convoptpick:active{background:#FFF1E8;border-color:#FF6A13}
.convoptpick:disabled{opacity:.5;cursor:default}
.convchoices{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px}
.convchoice{background:#fff;border:1.5px solid #FF6A13;color:#C2410C;border-radius:20px;padding:9px 15px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}
.convchoice:active{background:#FF6A13;color:#fff}
.convopttier{font-family:'Barlow Condensed';font-weight:700;text-transform:uppercase;font-size:12px;color:#157F3D;min-width:42px}
.convoptname{flex:1;color:#3A414B;line-height:1.35}
.convoptlink{color:#FF6A13;text-decoration:none;font-weight:700}
.convchosen{display:flex;align-items:center;gap:8px;margin-top:10px;border-top:1px solid #EEF0F3;padding-top:8px;font-size:13px}
.convchosenlbl{font-family:'Barlow Condensed';font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:#157F3D;font-size:13px}
.convchosenval{flex:1;color:#15181C;font-weight:600}
.convchosenchg{background:none;border:none;color:#FF6A13;font-size:12.5px;text-decoration:underline;cursor:pointer;font-family:inherit;padding:0}
.convchosenchg:disabled{opacity:.4;cursor:default}
.convchat{display:flex;flex-direction:column}
.convmsgs{display:flex;flex-direction:column;gap:9px;max-height:48vh;overflow-y:auto;padding:4px 2px 10px}
.convbubble{max-width:84%;padding:10px 13px;border-radius:16px;font-size:14.5px;line-height:1.45;white-space:pre-wrap}
.convhead{display:flex;align-items:center;gap:10px;margin-bottom:6px}
.convrow{display:flex;align-items:flex-end;gap:7px;max-width:90%}
.convrow.ai{align-self:flex-start}
.convav{flex-shrink:0;border-radius:50%;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.12)}
.helperimg{width:84px;height:84px;border-radius:50%;object-fit:cover;background:#fff;border:1px solid #E2E5EA}
.heroav{width:150px;height:150px;border-radius:50%;object-fit:cover;display:block;margin:4px auto 14px;box-shadow:0 4px 14px rgba(0,0,0,.12)}
.helperimg.sm{width:52px;height:52px;border:none}
.convbubble.ai{background:#F0F2F5;color:#15181C;border-bottom-left-radius:5px}
.convbubble.me{align-self:flex-end;background:#FF6A13;color:#fff;border-bottom-right-radius:5px}
.convbubble.typing{display:flex;gap:4px;align-items:center;min-height:20px}
.convbubble.typing span{width:7px;height:7px;border-radius:50%;background:#B4BAC2;display:inline-block;animation:caztyp 1.2s infinite ease-in-out}
.convbubble.typing span:nth-child(2){animation-delay:.18s}
.convbubble.typing span:nth-child(3){animation-delay:.36s}
.addrvis{border:1px solid #E2E5EA;border-radius:12px;padding:11px;margin-bottom:12px;text-align:left}
.addrvistitle{font-family:'Barlow Condensed';font-weight:700;text-transform:uppercase;letter-spacing:.4px;font-size:15px;margin-bottom:8px}
.addropt{display:block;width:100%;text-align:left;border:1.5px solid #E2E5EA;border-radius:10px;padding:10px;margin-bottom:8px;background:#fff;cursor:pointer;font-family:inherit}
.addropt.on{border-color:#FF6A13;background:#FFF6F0}
.addropt b{display:block;font-size:14px;margin-bottom:3px}
.addropt span{font-size:12px;color:#6B7280;line-height:1.4}
.addrtag{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;background:#EEF0F3;color:#6B7280;border-radius:10px;padding:2px 7px;margin-left:6px;vertical-align:middle}
.addrtag.accuracy{background:#EAFAF0;color:#157F3D}
.addrbadge{font-size:11.5px;font-weight:600;border-radius:8px;padding:5px 9px;margin-top:7px;display:inline-block}
.addrbadge.open{background:#EAFAF0;color:#157F3D}
.addrbadge.gated{background:#F4F6F8;color:#6B7280}
.dimrows{display:flex;flex-direction:column;gap:6px;margin-bottom:8px}
.dimrow{display:flex;gap:6px;align-items:center}
.dimlabel{flex:1}
.dimval{width:74px;text-align:right}
.dimunit{width:62px}
.dimx{width:30px;height:30px;flex-shrink:0;border:none;background:#F4F6F8;border-radius:8px;color:#9AA1AB;font-size:16px;cursor:pointer}
.dimx:active{background:#FFE0E0;color:#C2410C}
.dimchips{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:4px}
.dimchip{background:#F4F6F8;border:1px solid #E2E5EA;border-radius:16px;padding:6px 11px;font-size:12.5px;color:#3A414B;cursor:pointer;font-family:inherit}
.panelw{margin-top:10px}
.panelwlbl{display:block;font-size:11.5px;color:#6B7280;margin-bottom:5px;font-weight:600}
.panelwrow{display:flex;gap:7px}
.panelwbtn{flex:0 0 auto;background:#F4F6F8;border:1px solid #E2E5EA;border-radius:9px;padding:7px 15px;font-size:13px;font-weight:700;color:#3A414B;cursor:pointer;font-family:inherit}
.panelwbtn.on{background:#15181C;color:#fff;border-color:#15181C}
.dimchip:active{background:#FFF1E8;border-color:#FF6A13}
.dimchip.custom{background:#fff;border-style:dashed}
.measgroup{border:1px solid #EEF0F3;border-radius:10px;padding:10px;margin-bottom:8px}
.measlbl{font-size:12.5px;font-weight:700;color:#3A414B;margin-bottom:6px}
.uploadrow{display:flex;gap:8px;margin-top:8px}
.camerabtn{display:inline-flex;align-items:center;gap:6px;background:#F4F6F8;border:1px solid #E2E5EA;border-radius:10px;padding:9px 14px;cursor:pointer;color:#3A414B}
.upbtnlbl{font-size:13px;font-weight:600}
.camerabtn:active{background:#FFF1E8;border-color:#FF6A13}
.camcount{background:#FF6A13;color:#fff;border-radius:10px;font-size:12px;font-weight:700;padding:1px 7px}
.meashead{display:flex;width:100%;align-items:center;justify-content:space-between;background:#F7F8FA;border:1px solid #E2E5EA;border-radius:9px;padding:9px 12px;margin-bottom:8px;cursor:pointer;font-family:inherit;font-size:12.5px;font-weight:700;color:#3A414B}
.scopegrid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}
.scopebtn{display:flex;flex-direction:column;align-items:center;gap:5px;background:#F7F8FA;border:1.5px solid #E2E5EA;border-radius:12px;padding:14px 8px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600;color:#15181C;text-align:center}
.scopebtn:active{background:#FFF1E8;border-color:#FF6A13}
.scopelist{display:flex;flex-direction:column;gap:8px;margin-top:10px}
.scopebtn.wide{flex-direction:column;align-items:flex-start;gap:2px;text-align:left;padding:13px 14px}
.scopemain{font-size:14px;font-weight:700;color:#15181C}
.scopehint{font-size:11.5px;font-weight:500;color:#9AA1AB}
.scopeemoji{font-size:24px}
.oratext{text-align:center;color:#9AA1AB;font-size:12px;margin:14px 0 8px;position:relative}
.oratext::before,.oratext::after{content:"";position:absolute;top:50%;width:30%;height:1px;background:#E2E5EA}
.oratext::before{left:0}.oratext::after{right:0}
.scopepick{display:flex;width:100%;align-items:center;justify-content:space-between;background:#FFF6F0;border:1.5px solid #FF6A13;border-radius:10px;padding:10px 13px;margin:10px 0;cursor:pointer;font-family:inherit;font-size:14px;font-weight:700;color:#15181C}
.scopechg{font-size:12px;font-weight:600;color:#FF6A13;text-decoration:underline}
.dimsliders{display:flex;flex-direction:column;gap:14px;margin-bottom:6px}
.dimslider{}
.dimsliderhd{display:flex;justify-content:space-between;align-items:center;font-size:13.5px;font-weight:600;color:#3A414B;margin-bottom:5px}
.dimsliderval{display:flex;align-items:center;gap:4px}
.dsnum{width:72px;text-align:right;padding:5px 7px;font-family:'JetBrains Mono',monospace;font-size:13px}
.dsunit{font-size:12px;color:#9AA1AB;min-width:24px}
.dsrange{width:100%;accent-color:#FF6A13;height:4px}
.measmenu{border:1px solid #EEF0F3;border-radius:10px;padding:10px;margin-bottom:8px;display:flex;flex-direction:column;gap:8px}
.bookhead{display:flex;width:100%;align-items:center;justify-content:space-between;background:none;border:none;padding:0;cursor:pointer;font-family:inherit}
.bookchev{color:#9AA1AB;font-size:12px}
.bookbody{margin-top:10px}
.bookcat{margin-bottom:10px}
.bookcathd{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#FF6A13;margin-bottom:5px}
.bookrow{display:flex;gap:5px;align-items:center;margin-bottom:5px}
.bkname{flex:1;min-width:0}
.bkunit{width:54px;flex-shrink:0}
.bkval{width:72px;text-align:right;flex-shrink:0}
.matsummary{margin-top:6px}
.matcount{font-weight:600;color:#157F3D;font-size:14px;margin-bottom:8px}
.matpreview{border:1px solid #EEF0F3;border-radius:10px;padding:8px 10px;margin-bottom:10px}
.matrow{display:flex;justify-content:space-between;gap:10px;font-size:13px;padding:3px 0}
.matrow b{font-family:'JetBrains Mono',monospace}
.mono{font-family:'JetBrains Mono',monospace;font-size:12px;background:#F4F6F8;padding:2px 6px;border-radius:5px}
.stat{cursor:pointer;border:1.5px solid transparent;background:#fff;font-family:inherit}
.stat.on{border-color:#FF6A13;background:#FFF6F0}
.revitem{border-top:1px solid #EEF0F3;padding:9px 0}
.revitem:first-of-type{border-top:none}
.revtop{display:flex;justify-content:space-between;align-items:baseline;gap:8px}
.revstars{color:#FF6A13;font-size:14px;letter-spacing:1px}
.revstarsoff{color:#E2E5EA}
.revby{font-size:12px;color:#6B7280;text-align:right}
.revcomment{font-size:13.5px;color:#2A3038;line-height:1.45;margin:4px 0 0}
.saleschart{display:flex;align-items:flex-end;gap:8px;height:150px;margin-top:10px;overflow-x:auto;padding-bottom:4px}
.salesbar{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:4px;min-width:46px;height:100%}
.salesbarfill{width:30px;background:linear-gradient(#FF8A43,#FF6A13);border-radius:6px 6px 0 0;min-height:3px}
.salesval{font-family:'JetBrains Mono',monospace;font-size:10px;color:#3A414B}
.saleslbl{font-size:11px;color:#6B7280}
@keyframes caztyp{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-4px);opacity:1}}
.popin{animation:cazpop .32s ease-out both}
.scopegrid.popin .scopebtn{animation:cazpop .32s ease-out both}
@keyframes cazpop{0%{opacity:0;transform:translateY(8px) scale(.98)}100%{opacity:1;transform:translateY(0) scale(1)}}
.convattach{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px}
.attachbtn{display:inline-flex;align-items:center;gap:5px;background:#F4F6F8;border:1px solid #E2E5EA;border-radius:18px;padding:7px 12px;font-size:12.5px;color:#3A414B;cursor:pointer;font-family:inherit}
.attachbtn:active{background:#FFF1E8;border-color:#FF6A13}
.convreports{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}
.convinputrow{display:flex;gap:8px;align-items:center;border-top:1px solid #EEF0F3;padding-top:10px}
.convinputrow .in{flex:1}
.convsend{background:#FF6A13;color:#fff;border:none;border-radius:50%;width:42px;height:42px;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0}
.convsend:disabled{background:#D7DBE0;cursor:default}
.convdone{border-top:1px solid #EEF0F3;padding-top:12px}
.tiergrid{display:flex;flex-direction:column;gap:8px;margin-bottom:6px}
.tiercard{border:1.5px solid #D7DBE0;border-radius:12px;padding:11px 12px;background:#fff}
.tiercard.on{border-color:#FF6A13;background:#FFF6F0}
.tiertop{display:flex;justify-content:space-between;align-items:center}
.tierbadge{font-family:'Barlow Condensed';font-weight:700;text-transform:uppercase;letter-spacing:.6px;font-size:14px;color:#157F3D}
.tiercard.on .tierbadge{color:#C2410C}
.tiercost{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:16px}
.tiername{font-weight:600;font-size:14px;margin-top:3px}
.tierwhy{font-size:12px;color:#6B7280;line-height:1.4;margin-top:2px}
.tieract{display:flex;gap:8px;margin-top:9px}
.tieract .btn{padding:8px;font-size:13px;text-align:center;text-decoration:none}
.report{border:1px solid #E7E9ED;border-radius:12px;padding:11px 12px;font-size:12.5px;display:flex;flex-direction:column;gap:2px;background:#FAFBFC;text-decoration:none;color:inherit;-webkit-tap-highlight-color:rgba(255,106,19,.1)}
.report:active{border-color:#FF6A13;background:#FFF6F0}
.reportgo{color:#FF6A13;font-weight:700;font-size:12px;margin-top:2px}
.report b{font-family:'Barlow Condensed';font-size:15px;letter-spacing:.4px;text-transform:uppercase}
.report span{color:#737B86}
.pastebox{display:flex;flex-direction:column;gap:8px}
.ai-note{font-size:13px;color:#3A414B;background:#FFF6F0;border-left:3px solid #FF6A13;border-radius:0 10px 10px 0;padding:9px 11px;margin-top:10px}

/* bid card */
.bidcard{border:2px solid #FF6A13;box-shadow:0 8px 24px rgba(255,106,19,.18)}
.bid-price{font-family:'JetBrains Mono',monospace;font-weight:600;font-size:29px;color:#FF6A13;margin:8px 0 0}
.bid-days{font-weight:600;color:#157F3D;margin:2px 0 8px}
.bid-inc{margin:6px 0 12px 18px;color:#3A414B;font-size:14px}
.bid-inc li{margin-bottom:4px}

/* job feed cards */
.jobcard{padding:0;overflow:hidden}
.jobimg{width:100%;max-height:220px;object-fit:cover;display:block}
.jobbody{padding:14px 16px 16px}
.payrow{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;margin-top:10px;flex-wrap:wrap}
.payout{text-align:right;display:flex;flex-direction:column}
.payout span{font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:#737B86;font-weight:700}
.payout b{font-family:'JetBrains Mono',monospace;font-size:22px;color:#157F3D}

/* applicants & pros */
.applicant{display:flex;align-items:center;gap:11px;background:#FAFBFC;border:1px solid #E7E9ED;border-radius:13px;padding:10px 12px;margin-top:8px;cursor:pointer}
.prosrow{display:flex;align-items:center;gap:12px;cursor:pointer}
.prosthumb{width:58px;height:58px;object-fit:cover;border-radius:12px;border:1px solid #E7E9ED;flex-shrink:0}

/* avatars */
.avatar{width:44px;height:44px;border-radius:50%;background:#15181C;color:#fff;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;position:relative;border:none;padding:0}
.avatar img{width:100%;height:100%;object-fit:cover}
.avinit{font-family:'Barlow Condensed';font-weight:700;font-size:16px}
.avatar.lg{width:60px;height:60px}
.avatar.lg .avinit{font-size:21px}
.avatar.xl{width:74px;height:74px}
.avatar.xl .avinit{font-size:26px}
.avbtn{cursor:pointer}
.avcam{position:absolute;bottom:0;right:0;background:#FF6A13;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;border:2px solid #fff}
.profedit{display:flex;align-items:center;gap:14px;margin-bottom:4px}
.ratingline{font-weight:700;color:#FF6A13;font-size:15px}

/* reviews */
.revlist{display:flex;flex-direction:column;gap:10px}
.rev{border:1px solid #E7E9ED;border-radius:13px;padding:11px 13px;background:#FAFBFC}
.revtop{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.starline{display:inline-flex;gap:1px}
.stf{color:#FF6A13;fill:#FF6A13}
.ste{color:#D7DBE0}
.revby{font-weight:700;font-size:13.5px}
.revat{font-size:12px;color:#9AA1AB;margin-left:auto}
.revtxt{margin-top:5px;color:#3A414B;font-size:14px;line-height:1.45}
.revjob{margin-top:4px;font-size:12px;color:#737B86}

/* rate box */
.ratebox{border-top:1px dashed #D7DBE0;margin-top:12px;padding-top:10px;display:flex;flex-direction:column;gap:8px}
.rblabel{font-weight:600;font-size:14px}
.starsrow{display:flex;gap:2px}
.starbtn{font-size:31px;background:none;border:none;color:#D7DBE0;padding:2px 5px;line-height:1}
.starbtn.on{color:#FF6A13}

/* work feed posts */
.postcol{display:flex;flex-direction:column;gap:14px;margin-top:12px}
.postcard{border:1px solid #E7E9ED;border-radius:14px;overflow:hidden;background:#fff;box-shadow:0 1px 2px rgba(16,24,40,.05)}
.postcap{font-size:16.5px;font-weight:700;color:#15181C;padding:12px 14px 10px;line-height:1.35}
.stagecard{border:1px solid #E7E9ED;border-radius:14px;overflow:hidden;background:#fff}
.stagecard .caplabel{display:block;padding:12px 14px 0}
.stagecard .btnrow{padding:12px 14px}
.stagecard .postimgwrap img{width:100%;display:block;max-height:360px;object-fit:cover}
.postimgwrap{position:relative}
.postcard img{width:100%;display:block;max-height:420px;object-fit:cover}
.postcard .tx{top:8px;right:8px}
.addpost{display:flex;flex-direction:column;gap:8px}

/* chat */
.chatpage{padding-bottom:0;min-height:calc(100vh - 60px);display:flex;flex-direction:column}
.chat{flex:1;display:flex;flex-direction:column;gap:8px;padding:4px 0 12px;overflow-y:auto}
.bubble{max-width:82%;background:#fff;border:1px solid #E7E9ED;border-radius:16px 16px 16px 5px;padding:9px 13px;font-size:14.5px;align-self:flex-start;box-shadow:0 1px 2px rgba(16,24,40,.04);line-height:1.4}
.bubble.mine{align-self:flex-end;background:#FF6A13;border-color:#FF6A13;color:#fff;border-radius:16px 16px 5px 16px}
.bubble .who{display:block;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;opacity:.65;margin-bottom:2px}
.chatbar{position:sticky;bottom:0;display:flex;gap:8px;align-items:center;background:#F2F3F5;padding:10px 0 calc(86px + env(safe-area-inset-bottom))}
.chatbar .iconbtn{background:#fff;border:1.5px solid #D7DBE0;color:#15181C}
.chatin{flex:1;border:1.5px solid #D7DBE0;border-radius:999px;padding:12px 17px;font:inherit;font-size:16px;background:#fff}
.sendbtn{background:#FF6A13;color:#fff;border:none;border-radius:50%;width:46px;height:46px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.sendbtn:disabled{opacity:.45}

/* bottom nav */
.bnav{position:fixed;bottom:0;left:0;right:0;z-index:40;display:flex;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);border-top:1px solid #E7E9ED;padding:7px 6px calc(7px + env(safe-area-inset-bottom))}
.bitem{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:none;color:#9AA1AB;padding:5px 2px;border-radius:12px}
.bitem span{font-size:10.5px;font-weight:700;letter-spacing:.2px}
.bitem.on{color:#FF6A13}
.bitem{position:relative}
.navdot{position:absolute;top:1px;right:16%;background:#FF6A13;color:#fff;border-radius:999px;min-width:17px;height:17px;font-size:10.5px;font-weight:800;display:flex;align-items:center;justify-content:center;padding:0 4px}
.btn.attn{border-color:#FF6A13;color:#FF6A13}
.mine-tag{display:inline-block;background:#EFF1F4;color:#6B7280;font-family:Inter;font-size:10px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;padding:2px 7px;border-radius:999px;margin-left:8px;vertical-align:middle}
.howrow{display:flex;gap:8px;max-width:380px;margin:0 auto 16px}
.howstep{flex:1;background:#fff;border:1px solid #E7E9ED;border-radius:13px;padding:12px 8px;font-size:12px;font-weight:600;color:#3A414B;display:flex;flex-direction:column;align-items:center;gap:5px;line-height:1.25}
.howstep b{width:24px;height:24px;border-radius:50%;background:#FF6A13;color:#fff;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:13px}
.chooserbtns{display:flex;gap:10px;max-width:380px;margin:0 auto;width:100%}
.emptyfeed{display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;color:#9AA1AB;padding:28px 18px}
.emptyfeed b{color:#15181C;font-size:16px}
.emptyfeed .btn{margin-top:4px}
.qcard{border:2px solid #FF6A13;box-shadow:0 8px 24px rgba(255,106,19,.15)}
.diagline{font-size:11.5px;color:#9AA1AB;margin:-6px 0 2px;font-family:'JetBrains Mono',monospace}
.setupbanner{border:2px solid #FF6A13;background:#FFF6F0;display:flex;flex-direction:column;gap:4px}
.setupbanner b{font-family:'Barlow Condensed';font-size:19px;text-transform:uppercase;letter-spacing:.4px;color:#15181C}
.setupbanner span{font-size:13px;color:#6B7280;line-height:1.4}
.bidset{margin-top:12px;background:#FAFBFC;border:1px solid #E7E9ED;border-radius:13px;padding:11px 13px}
.bidsethead{display:flex;align-items:baseline;justify-content:space-between;gap:10px}
.bidbig{font-family:'JetBrains Mono',monospace;font-weight:600;font-size:26px;color:#FF6A13}
.bidslider{-webkit-appearance:none;appearance:none;width:100%;height:8px;border-radius:999px;margin:12px 0 6px;background:linear-gradient(90deg,#FF6A13 var(--pct,50%),#E2E5EA var(--pct,50%));outline:none}
.bidslider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:28px;height:28px;border-radius:50%;background:#fff;border:3px solid #FF6A13;box-shadow:0 2px 6px rgba(0,0,0,.2);cursor:pointer}
.bidslider::-moz-range-thumb{width:28px;height:28px;border-radius:50%;background:#fff;border:3px solid #FF6A13;box-shadow:0 2px 6px rgba(0,0,0,.2);cursor:pointer}
.bidends{display:flex;justify-content:space-between;align-items:center;font-family:'JetBrains Mono',monospace;font-size:12px;color:#6B7280}
.bidends .hint{font-family:Inter}
.appbid{display:flex;flex-direction:column;align-items:flex-end;gap:5px;flex-shrink:0}
.appbidnum{font-family:'JetBrains Mono',monospace;font-weight:600;font-size:16px;color:#157F3D}
.editrow{display:flex;gap:14px;margin-top:8px}
.linkbtn{display:inline-flex;align-items:center;gap:5px;background:none;border:none;color:#6B7280;font-weight:600;font-size:13px;padding:4px 0;cursor:pointer}
.linkbtn.del{color:#C2410C}
.linkbtn.del.arm{color:#fff;background:#DC2626;border-radius:8px;padding:5px 10px}
.editbox{margin-top:10px}
.privacywarn{display:flex;align-items:flex-start;gap:6px;font-size:12px;color:#C2410C;background:#FFF4EC;border-radius:10px;padding:8px 10px;margin-top:10px;line-height:1.4}
.thumbrm{position:absolute;bottom:0;left:0;right:0;background:rgba(21,24,28,.82);color:#fff;border:none;font-size:11px;font-weight:700;padding:5px;display:flex;align-items:center;justify-content:center;gap:4px;cursor:pointer}
.thumb{height:auto}
.thumb img{height:74px}
.estflag{font-size:12.5px;color:#C2410C;background:#FFF4EC;border-radius:10px;padding:8px 10px;margin-top:8px;line-height:1.4}
.tighten{background:#F4F6F8;border:1px solid #DFE3E8;border-radius:12px;padding:11px 12px;margin:10px 0}
.tightentext{font-size:13px;color:#3A414B;line-height:1.5;margin:0 0 9px}
.tightenmiss{color:#15181C;font-weight:600}
.howto{background:#F0F7F2;border:1px solid #CDE6D6;border-radius:12px;padding:12px 14px;margin:10px 0}
.howtohead{font-family:'Barlow Condensed';font-weight:700;font-size:17px;text-transform:uppercase;letter-spacing:.4px;color:#157F3D;margin-bottom:6px}
.howtosteps{margin:0;padding-left:20px;font-size:13.5px;color:#2A3038;line-height:1.55}
.howtosteps li{margin-bottom:4px}
.howtoback{font-size:12.5px;color:#3A414B;background:#FFFFFF;border-radius:9px;padding:8px 10px;margin-top:9px;line-height:1.45}
.dropzone.shot{display:flex;flex-direction:column;align-items:center;gap:3px;border:2px solid #FF6A13;background:#FFF4EC;border-radius:13px;padding:15px;text-align:center;cursor:pointer}
.dropzone.shot b{font-size:16px;color:#15181C}
.dzsub{font-size:12px;color:#6B7280}
.altrow{display:flex;gap:18px;justify-content:center;margin-top:10px}
.altlink{background:none;border:none;color:#6B7280;font-size:12.5px;text-decoration:underline;cursor:pointer;padding:0;font-family:inherit}
.costbox{margin-top:12px;border:1px dashed #B8BEC8;border-radius:12px;padding:11px 13px;background:#FAFBFC}
.costhead{font-family:'Barlow Condensed';font-weight:700;font-size:16px;text-transform:uppercase;letter-spacing:.4px;margin-bottom:8px}
.costrow{display:flex;justify-content:space-between;gap:12px;font-size:13px;color:#3A414B;padding:3px 0}
.labtag{display:inline-block;margin-left:7px;padding:1px 7px;border-radius:8px;font-size:10.5px;font-weight:700;vertical-align:middle;letter-spacing:.2px}
.labtag.book{background:#E6F4EA;color:#157F3D}
.labtag.est{background:#FFF1E8;color:#C2540A}
.manualbadge{display:inline-block;margin:2px 0 8px;padding:3px 10px;border-radius:9px;font-size:11.5px;font-weight:700;letter-spacing:.2px}
.manualbadge.on{background:#E6F4EA;color:#157F3D}
.manualbadge.off{background:#F1F1F2;color:#6B7076}
.costrow b{font-family:'JetBrains Mono',monospace;color:#15181C}
.costrow.total{border-top:1px solid #E2E5EA;margin-top:4px;padding-top:7px;font-weight:700}
.costrow.total b{color:#15181C}
.overriderow{margin-top:10px}
.ovbox{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.ovinput{width:140px;font-family:'JetBrains Mono',monospace;font-size:18px;font-weight:600}
.radslider{-webkit-appearance:none;appearance:none;width:100%;height:8px;border-radius:999px;margin:10px 0 6px;background:linear-gradient(90deg,#FF6A13 var(--pct,30%),#E2E5EA var(--pct,30%));outline:none}
.radslider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:28px;height:28px;border-radius:50%;background:#fff;border:3px solid #FF6A13;box-shadow:0 2px 6px rgba(0,0,0,.2);cursor:pointer}
.radslider::-moz-range-thumb{width:28px;height:28px;border-radius:50%;background:#fff;border:3px solid #FF6A13;cursor:pointer}
.radpill{width:100%;text-align:center;border:1.5px solid #D7DBE0;background:#fff;border-radius:12px;padding:10px;font-weight:600;font-size:13px;color:#6B7280;cursor:pointer;margin-bottom:2px}
.radpill.on{border-color:#FF6A13;background:#FFF6F0;color:#C2410C}
.segtabs{display:flex;gap:6px;background:#EFF1F4;border-radius:12px;padding:4px}
.seg{flex:1;border:none;background:none;padding:9px;border-radius:9px;font-weight:700;font-size:13.5px;color:#6B7280;cursor:pointer}
.seg.on{background:#fff;color:#15181C;box-shadow:0 1px 3px rgba(0,0,0,.1)}
.privacyaccept{display:flex;align-items:flex-start;gap:10px;width:100%;text-align:left;background:#FFF4EC;border:1.5px solid #F0A878;border-radius:12px;padding:12px;margin:4px 0 10px;cursor:pointer}
.privacyaccept.on{border-color:#157F3D;background:#EAFAF0}
.pacheck{flex-shrink:0;width:24px;height:24px;border-radius:7px;border:2px solid #C2410C;background:#fff;display:flex;align-items:center;justify-content:center;color:#157F3D}
.privacyaccept.on .pacheck{border-color:#157F3D;background:#157F3D;color:#fff}
.patext{font-size:12.5px;color:#15181C;line-height:1.4}
.patext b{font-weight:700}
.card-h2{font-family:'Barlow Condensed';font-weight:700;font-size:19px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px}
.addrtoggle{display:flex;align-items:center;gap:11px;cursor:pointer}
.addrtoggle span{font-size:14px;color:#15181C}
.toggleswitch{width:46px;height:27px;border-radius:999px;background:#D7DBE0;border:none;position:relative;flex-shrink:0;cursor:pointer;transition:background .15s;padding:0}
.toggleswitch.on{background:#157F3D}
.toggleswitch span{position:absolute;top:3px;left:3px;width:21px;height:21px;border-radius:50%;background:#fff;transition:left .15s;box-shadow:0 1px 3px rgba(0,0,0,.3)}
.toggleswitch.on span{left:22px}
.nudgetxt{display:flex;align-items:flex-start;gap:7px;font-size:13.5px;color:#15181C;line-height:1.45;margin-bottom:10px}
.matwrap{margin-top:12px}
.matlist{border:1px solid #E7E9ED;border-radius:13px;padding:11px 12px;background:#FAFBFC}
.matlhead{display:flex;align-items:center;gap:7px;font-family:'Barlow Condensed';font-weight:700;font-size:16px;text-transform:uppercase;letter-spacing:.4px;margin-bottom:8px;flex-wrap:wrap}
.matrow{display:flex;gap:6px;align-items:center;margin-bottom:6px}
.matname{flex:2;padding:8px 10px}
.matqty{flex:1;padding:8px 10px}
.matx{background:none;border:none;color:#9AA1AB;padding:4px;flex-shrink:0;cursor:pointer}
.bellbtn{position:relative}
.belldot{position:absolute;top:-3px;right:-3px;background:#FF6A13;color:#fff;border-radius:999px;min-width:17px;height:17px;font-size:10.5px;font-weight:800;display:flex;align-items:center;justify-content:center;padding:0 4px;border:2px solid #15181C}
.notifback{position:fixed;inset:0;z-index:70;background:rgba(21,24,28,.35)}
.notifpanel{position:absolute;top:calc(54px + env(safe-area-inset-top));right:10px;width:min(360px,92vw);max-height:70vh;overflow-y:auto;background:#fff;border:1px solid #E7E9ED;border-radius:16px;box-shadow:0 14px 40px rgba(0,0,0,.25)}
.notifhead{display:flex;align-items:center;justify-content:space-between;font-family:'Barlow Condensed';font-weight:700;font-size:19px;text-transform:uppercase;letter-spacing:.5px;padding:13px 15px;border-bottom:1px solid #E7E9ED;position:sticky;top:0;background:#fff}
.notifx{background:none;border:none;color:#9AA1AB;cursor:pointer;padding:2px}
.notifrow{display:flex;align-items:flex-start;gap:10px;width:100%;text-align:left;background:none;border:none;border-bottom:1px solid #F1F2F5;padding:12px 15px;cursor:pointer}
.notifrow.unseen{background:#FFF6F0}
.notifico{font-size:18px;flex-shrink:0;line-height:1.2}
.notiftxt{font-size:13.5px;color:#15181C;line-height:1.4}
.notifwhen{display:block;font-size:11px;color:#9AA1AB;margin-top:2px}
.seclabel{font-size:11px;font-weight:800;letter-spacing:.7px;text-transform:uppercase;color:#FF6A13;margin-top:2px}

/* chooser */
.chooser{padding-top:52px;text-align:center}
.hero{font-family:'Barlow Condensed';font-weight:700;font-size:46px;line-height:1.02;text-transform:uppercase}
.herosub{color:#4B5563;max-width:440px;margin:14px auto 24px;line-height:1.5}
.rolebtn{display:block;width:100%;max-width:380px;margin:0 auto 12px;background:#FF6A13;color:#fff;border:none;border-radius:16px;padding:18px;font-family:'Barlow Condensed';font-weight:700;font-size:22px;letter-spacing:.8px;text-transform:uppercase;box-shadow:0 6px 18px rgba(255,106,19,.3)}
.rolebtn.dark{background:#15181C;box-shadow:0 6px 18px rgba(21,24,28,.25)}

/* toast & party */
.toast{position:fixed;bottom:calc(96px + env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);background:#15181C;color:#fff;padding:11px 18px;border-radius:13px;border-left:4px solid #FF6A13;z-index:60;max-width:90vw;box-shadow:0 8px 24px rgba(0,0,0,.3);font-size:14px;line-height:1.4}
.party{position:fixed;inset:0;z-index:80;background:rgba(21,24,28,.55);display:flex;align-items:center;justify-content:center;overflow:hidden}
.confetti{position:absolute;top:-20px;border-radius:2px;animation:fall linear forwards}
@keyframes fall{to{transform:translateY(112vh) rotate(var(--rot,540deg))}}
.partycard{background:#fff;border-radius:22px;padding:30px 28px;text-align:center;max-width:320px;margin:0 18px;box-shadow:0 20px 60px rgba(0,0,0,.35);display:flex;flex-direction:column;align-items:center;gap:8px;animation:pop .35s cubic-bezier(.2,1.4,.4,1)}
@keyframes pop{from{transform:scale(.7);opacity:0}to{transform:scale(1);opacity:1}}
.partytitle{font-family:'Barlow Condensed';font-weight:700;font-size:30px;text-transform:uppercase;line-height:1.05}
.partysub{color:#4B5563;font-size:14.5px;line-height:1.45}
.partyhint{color:#9AA1AB;font-size:11.5px;margin-top:6px}

/* plans */
.plangrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:10px}
.plan{position:relative;text-align:left;background:#fff;border:1.5px solid #D7DBE0;border-radius:14px;padding:13px;display:flex;flex-direction:column;gap:3px;cursor:pointer}
.plan.on{border-color:#FF6A13;background:#FFF6F0}
.plan b{font-family:'Barlow Condensed';font-size:18px;letter-spacing:.5px;text-transform:uppercase}
.planprice{font-family:'JetBrains Mono',monospace;font-weight:600;font-size:22px}
.planprice i{font-style:normal;font-size:12px;color:#737B86}
.planon{position:absolute;top:9px;right:11px;color:#FF6A13;font-weight:700;font-size:12px;text-transform:uppercase}

@media (min-width:560px){.reportgrid{grid-template-columns:repeat(3,1fr)}}
@media (prefers-reduced-motion: reduce){*{transition:none!important;animation:none!important}.confetti{display:none}}
`;


// ---- mount the app (Netlify/browser; the artifact relay used to do this automatically) ----
const __root = ReactDOM.createRoot(document.getElementById("root"));
__root.render(React.createElement(App));
