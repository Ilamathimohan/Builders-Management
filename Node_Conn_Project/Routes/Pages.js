const express= require("express");
const router= express.Router();

router.get("/",(req,res)=>{
    res.render("Login");
});

router.get("/Register",(req,res)=>{
    res.render("Register");
});

router.get("/Profile",(req,res)=>{
    res.render("Profile");
});

router.get("/Home",(req,res)=>{
    res.render("Home");
});

router.get("/Design",(req,res)=>{
    res.render("Design");
});

router.get("/Brick",(req,res)=>{
    res.render("Brick");
});

router.get("/Burnt_Clay_Brick",(req,res)=>{
    res.render("Burnt_Clay_Brick");
});

router.get("/Sun-Dried_Clay_Brick",(req,res)=>{
    res.render("Sun-Dried_Clay_Brick");
});

router.get("/Concrete_Brick",(req,res)=>{
    res.render("Concrete_Brick");
});

router.get("/Engineering_Brick",(req,res)=>{
    res.render("Engineering_Brick");
});

router.get("/Sand_Lime_Brick",(req,res)=>{
    res.render("Sand_Lime_Brick");
});

router.get("/Fly_Ash_Brick",(req,res)=>{
    res.render("Fly_Ash_Brick");
});

router.get("/Fire_Brick",(req,res)=>{
    res.render("Fire_Brick");
});

router.get("/Cement",(req,res)=>{
    res.render("Cement");
});

router.get("/Low_Heat_Cement",(req,res)=>{
    res.render("Low_Heat_Cement");
});

router.get("/Ordinary_Portlant_Cement",(req,res)=>{
    res.render("Ordinary_Portlant_Cement");
});

router.get("/QUICK_Setting_Cement",(req,res)=>{
    res.render("QUICK_Setting_Cement");
});

router.get("/Portland_Pazzolana_Cement",(req,res)=>{
    res.render("Portland_Pazzolana_Cement");
});

router.get("/Rapid_Hardening_Cement",(req,res)=>{
    res.render("Rapid_Hardening_Cement");
});

router.get("/Sulphate_Resistance_Cement",(req,res)=>{
    res.render("Sulphate_Resistance_Cement");
});

router.get("/Glass",(req,res)=>{
    res.render("Glass");
});

router.get("/Float_Glass",(req,res)=>{
    res.render("Float_Glass");
});

router.get("/Shatterproof_Glass",(req,res)=>{
    res.render("Shatterproof_Glass");
});

router.get("/Laminated_Glass",(req,res)=>{
    res.render("Laminated_Glass");
});

router.get("/Tined_Glass",(req,res)=>{
    res.render("Tined_Glass");
});

router.get("/Glass_Wool",(req,res)=>{
    res.render("Glass_Wool");
});

router.get("/Paint",(req,res)=>{
    res.render("Paint");
});

router.get("/Enamel_Paint",(req,res)=>{
    res.render("Enamel_Paint");
});

router.get("/Emulsion_Paint",(req,res)=>{
    res.render("Emulsion_Paint");
});

router.get("/Cement_Paint",(req,res)=>{
    res.render("Cement_Paint");
});

router.get("/Bituminous_Paint",(req,res)=>{
    res.render("Bituminous_Paint");
});

router.get("/Anti-Corrosive_Paint",(req,res)=>{
    res.render("Anti-Corrosive_Paint");
});

router.get("/Pipes",(req,res)=>{
    res.render("Pipes");
});

router.get("/Carbon_Steel_Pipes",(req,res)=>{
    res.render("Carbon_Steel_Pipes");
});

router.get("/Cast_Iron_Pipes",(req,res)=>{
    res.render("Cast_Iron_Pipes");
});

router.get("/Galvanized_Steel_Pipes",(req,res)=>{
    res.render("Galvanized_Steel_Pipes");
});

router.get("/Concrete_Pipes",(req,res)=>{
    res.render("Concrete_Pipes");
});

router.get("/PVC_Pipes",(req,res)=>{
    res.render("PVC_Pipes");
});

router.get("/Pipes",(req,res)=>{
    res.render("Pipes");
});

router.get("/Sand",(req,res)=>{
    res.render("Sand");
});

router.get("/Concrete_Sand",(req,res)=>{
    res.render("Concrete_Sand");
});

router.get("/Fill_Sand",(req,res)=>{
    res.render("Fill_Sand");
});

router.get("/M-Sand",(req,res)=>{
    res.render("M-Sand");
});

router.get("/Pit_Sand",(req,res)=>{
    res.render("Pit_Sand");
});

router.get("/River_Sand",(req,res)=>{
    res.render("River_Sand");
});

router.get("/P-Sand",(req,res)=>{
    res.render("P-Sand");
});

router.get("/Steel",(req,res)=>{
    res.render("Steel");
});

router.get("/Steel_Rebar",(req,res)=>{
    res.render("Steel_Rebar");
});

router.get("/Alloy_Steel",(req,res)=>{
    res.render("Alloy_Steel");
});

router.get("/Carbon_Steel",(req,res)=>{
    res.render("Carbon_Steel");
});

router.get("/Stainless_Steel",(req,res)=>{
    res.render("Stainless_Steel");
});

router.get("/Structural_Steel",(req,res)=>{
    res.render("Structural_Steel");
});

router.get("/Tool_Steel",(req,res)=>{
    res.render("Tool_Steel");
});

router.get("/Weathering_Steel",(req,res)=>{
    res.render("Weathering_Steel");
});

router.get("/Light_Gauge_Steel",(req,res)=>{
    res.render("Light_Gauge_Steel");
}); 

router.get("/Wood",(req,res)=>{
    res.render("Wood");
});

router.get("/Pine_Wood",(req,res)=>{
    res.render("Pine_Wood");
});

router.get("/Cedar_Wood",(req,res)=>{
    res.render("Cedar_Wood");
});

router.get("/Spruce_Wood",(req,res)=>{
    res.render("Spruce_Wood");
});

router.get("/Teak_Wood",(req,res)=>{
    res.render("Teak_Wood");
});

router.get("/Oak_Wood",(req,res)=>{
    res.render("Oak_Wood");
});

module.exports=router;