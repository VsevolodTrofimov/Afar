#pragma strict

var anim : Animator;
var rb   : Rigidbody;

var LeftLegCollider: CapsuleCollider;
var RightLegCollider: CapsuleCollider;
var TopLegCollider: CapsuleCollider;
var BottomLegCollider: CapsuleCollider;
var BackLegCollider: CapsuleCollider;



public class Legs {
	var left : boolean;
	var right : boolean;
	var top : boolean;
	var bottom : boolean;
	var back : boolean;
	function ClassName(){
		this.left = false;
		this.right = false;
		this.top = false;
		this.bottom = false;
		this.back = false;
	     
   }
	
};

var legs = new Legs();

function Start () {
	anim = GetComponent.<Animator>();
	rb = GetComponent.<Rigidbody>();
};

function LateUpdate () {
	
	anim.SetBool("LegLeftLaunch", legs.left);
	anim.SetBool("LegRightLaunch", legs.right);
	anim.SetBool("LegTopLaunch", legs.top);
	anim.SetBool("LegBottomLaunch", legs.bottom);
	anim.SetBool("LegBackLaunch", legs.back);
	
	
	
	if (legs.left){
		LeftLegCollider.center = new Vector3(1.65,0,0);
	} else {
		LeftLegCollider.center = new Vector3(0,0,0);
	}
	
	if (legs.right){
		RightLegCollider.center = new Vector3(-1.65,0,0);
	} else {
		RightLegCollider.center = new Vector3(0,0,0);
	}
		
	if (legs.top){
		TopLegCollider.center = new Vector3(0,1.65,0);
	} else {
		TopLegCollider.center = new Vector3(0,0,0);
	}
	
	if (legs.bottom){
		BottomLegCollider.center = new Vector3(0,-1.45,0);
	} else {
		BottomLegCollider.center = new Vector3(0,0,0);
	}
	
	if (legs.back){
		BackLegCollider.center = new Vector3(-0.05,0,-1.65);
	} else {
		BackLegCollider.center = new Vector3(-0.05,0,0);
	}
	
	
			
	if(Input.GetKeyDown(KeyCode.D)){
		if(legs.left){
			legs.left = false;
		} else {
			legs.left = true;
		}
	}
	
	if(Input.GetKeyDown(KeyCode.A)){
		if(legs.right){
			legs.right = false;
		} else {
			legs.right = true;
		}
	}
	
	if(Input.GetKeyDown(KeyCode.W)){
		if(legs.top){
			legs.top = false;
		} else {
			legs.top = true;
		}
	}
	
	if(Input.GetKeyDown(KeyCode.X)){
		if(legs.bottom){
			legs.bottom = false;
		} else {
			legs.bottom = true;
		}
	}
	
	if(Input.GetKeyDown(KeyCode.S)){
		if(legs.back){
			legs.back = false;
		} else {
			legs.back = true;
			
		}
	}
};